using System.Dynamic;
using System.Linq.Expressions;
using Core.Attributes;
using Core.Constants;
using Core.Entities;
using Infrastructure.Data;
using Infrastructure.Utility;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace API.Binders
{
    public class QueryFilterBinder<T> : IModelBinder where T : Entity
    {
        private IQueryable<T> _query;
        
        public QueryFilterBinder(StoreContext context)
        {
            _query = context.Set<T>().AsQueryable();
        }

        public Task BindModelAsync(ModelBindingContext context)
        {
            char[] splitPattern = new char[] {'[', ']'}; 
            var query = context.HttpContext.Request.Query;
            var type = this.GetType().GetGenericArguments()[0];            
            List<Expression<Func<T, bool>>> specifications = new List<Expression<Func<T, bool>>>();
            int take = 0;
            string orderBy = null;
            
            if (query.Count() == 0) 
            {
                var attrs = type.GetCustomAttributes(true);

                foreach (var attr in attrs)
                {
                    if (attr is LimitAttribute)
                    {
                        take = ((LimitAttribute) attr).Limit;
                    }

                    if (attr is OrderByAttribute)
                    {
                        orderBy = ((OrderByAttribute) attr).OrderBy;                        
                    }
                }

                if (take == 0 && orderBy == null)
                {
                    context.Result = ModelBindingResult.Success(null);
                    return Task.CompletedTask;
                }
            }

            // OrderBy
            if (query.TryGetValue("sort", out var sort))
            {
                SetOrderBy(sort[0]);               
            } 
            else if (orderBy != null)
            {
                SetOrderBy(orderBy);
            }

            // Limit
            if (query.TryGetValue("limit", out var limit))
            {
                _query = _query.Take(int.Parse(limit[0]));
            } else if (take > 0) {
                _query = _query.Take(take);                
            }   

            // Skip
            if (query.TryGetValue("skip", out var skip))
            {
                _query = _query.Skip(int.Parse(skip[0]));
            } else if (query.TryGetValue("page", out var page))
            {
                if (take <= 0)
                {
                    foreach (object attr in type.GetCustomAttributes(true))
                    {
                        if (attr is LimitAttribute)
                        {
                            take = ((LimitAttribute) attr).Limit;
                        }
                    }
                }

                take = take > 0 ? take : 30;

                var pageNumber = int.Parse(page);
                var pagesToSkip = --pageNumber * take;

                if (pagesToSkip > 0) {
                    _query = _query.Skip(pagesToSkip);
                    _query = _query.Take(take);
                } else {
                    _query = _query.Take(take);
                }
            }

            // Projection
            if (query.TryGetValue("fields", out var fields))
            {

                _query.Select<T, object>(new Func<T, object>(x => {
                    var properties = fields[0].Split(',');
                    dynamic projection = new ExpandoObject();

                    foreach (var item in properties)
                    {
                        var field = CapitalizeProperty(item);
                        projection.Add(field, x.GetType().GetProperty(field).GetValue(x));
                    }

                    return projection;
                })).AsQueryable();
            }

            // Property Filters
            foreach (var parameter in query)
            {
                var param = parameter.Key.Split(splitPattern, StringSplitOptions.RemoveEmptyEntries);
                var value = parameter.Value;

                if (
                    param[0] == "limit"   || 
                    param[0] == "sort"    || 
                    param[0] == "skip"    || 
                    param[0] == "page"    || 
                    param[0] == "fields"  || 
                    param[0] == "groupBy"
                )
                {
                    continue;
                }

                var property = char.ToUpper(param[0][0]) + param[0].Substring(1);
                var predicate = param.Count() > 1 ? param[1] : "eq";

                if (predicate == CriteriaOperator.EQUAL)
                {
                    specifications.Add(x => x[property] == Convert.ChangeType(value[0], type.GetProperty(property).PropertyType));
                }

                if (predicate == CriteriaOperator.NOT_EQUAL)
                {
                    specifications.Add(x => x[property] != Convert.ChangeType(value[0], type.GetProperty(property).PropertyType));
                }

                if (predicate == CriteriaOperator.GREATER_THAN)
                {
                    specifications.Add(x => (double) x[property] > (double) Convert.ChangeType(value[0], typeof(Double)));
                }

                if (predicate == CriteriaOperator.GREATER_THAN_OR_EQUAL)
                {
                    specifications.Add(x => (double) x[property] >= (double) Convert.ChangeType(value[0], typeof(Double)));
                }

                if (predicate == CriteriaOperator.LESS_THAN)
                {
                    specifications.Add(x => (double) x[property] < (double) Convert.ChangeType(value[0], typeof(Double)));
                }

                if (predicate == CriteriaOperator.LESS_THAN_OR_EQUAL)
                {
                    specifications.Add(x => (double) x[property] <= (double) Convert.ChangeType(value[0], typeof(Double)));
                }

                if (predicate == CriteriaOperator.NOT_IN)
                {
                    List<object> values = value.Count() == 1 ? value[0].Split(',').Aggregate(new List<object>(), (current, val) => {
                        current.Add(Convert.ChangeType(val, type.GetProperty(property).PropertyType));
                        return current;
                    }) : value.Aggregate(new List<object>(), (current, val) => {
                        current.Add(Convert.ChangeType(val, type.GetProperty(property).PropertyType));
                        return current;
                    });
                    
                    specifications.Add(x => !values.Contains(x[property]));
                }

                if (predicate == CriteriaOperator.IN)
                {
                    List<object> values = value.Count() == 1 ? value[0].Split(',').Aggregate(new List<object>(), (current, val) => {
                        current.Add(Convert.ChangeType(val, type.GetProperty(property).PropertyType));
                        return current;
                    }) : value.Aggregate(new List<object>(), (current, val) => {
                        current.Add(Convert.ChangeType(val, type.GetProperty(property).PropertyType));
                        return current;
                    });

                    specifications.Add(x => values.Contains(x[property]));
                }

                if (predicate == CriteriaOperator.LIKE) {
                    specifications.Add(x => ((string) x[property]).Contains(value[0]));
                }
            }

            var criteria = new QueryCriteria<T>(_query, specifications);

            context.Result = ModelBindingResult.Success(criteria);
            return Task.CompletedTask;
        }

        private void SetOrderBy(string sort)
        {
            var sortables = sort.Split(",");

            for (int i = 0; i < sortables.Count(); i++)
            {       
                bool isDesc = sortables[i].Trim().StartsWith('-');
                string sortBy = isDesc ? CapitalizeProperty(sortables[i].Substring(1)) : CapitalizeProperty(sortables[i]);

                if (i == 0)
                {
                    switch(isDesc) 
                    {
                        case true:                            
                            _query = _query.OrderByDescending(x => x[sortBy]);
                            break;
                        default:                            
                            _query = _query.OrderBy(x => x[sortBy]);
                            break;
                    }
                    continue;
                }

                switch(isDesc) 
                {
                    case true:                        
                        _query = ((IOrderedQueryable<T>) _query).ThenByDescending(x => x[sortBy]);
                        break;
                    default:                        
                        _query = ((IOrderedQueryable<T>) _query).ThenBy(x => x[sortBy]);
                        break;
                }
            }
        }

        private string CapitalizeProperty(string property)
        {
            property = property.Trim();
            return char.ToUpper(property[0]) + property.Substring(1);
        }
    }
}