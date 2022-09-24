using System.Dynamic;
using System.Linq.Expressions;
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
            
            if (query.Count() == 0) 
            {
                context.Result = ModelBindingResult.Success(null);
                return Task.CompletedTask;
            }

            // OrderBy
            if (query.TryGetValue("sort", out var sort)) 
            {
                Console.WriteLine(sort);

                var sortables = sort[0].Split(",");

                for (int i = 0; i < sortables.Count(); i++)
                {       
                    string sortBy = sortables[i];
                    bool isDesc = sortBy.StartsWith('-');

                    if (i == 0)
                    {
                        switch(isDesc) 
                        {
                            case true:
                                sortBy = char.ToUpper(sortBy.Substring(1)[0]) + sortBy.Substring(2);
                                _query = _query.OrderByDescending(x => x.GetType().GetProperty(sortBy).GetValue(x));
                                break;
                            default:
                                sortBy = char.ToUpper(sortBy[0]) + sortBy.Substring(1);
                                _query = _query.OrderBy(x => x.GetType().GetProperty(sortBy).GetValue(x));
                                break;
                        }
                    }

                    switch(isDesc) 
                    {
                        case true:
                            sortBy = char.ToUpper(sortBy.Substring(1)[0]) + sortBy.Substring(2);
                            _query = ((IOrderedQueryable<T>) _query).ThenByDescending(x => x.GetType().GetProperty(sortBy).GetValue(x));
                            break;
                        default:
                            sortBy = char.ToUpper(sortBy[0]) + sortBy.Substring(1);
                            _query = ((IOrderedQueryable<T>) _query).ThenBy(x => x.GetType().GetProperty(sortBy).GetValue(x));
                            break;
                    }
                }
            }

            if (query.TryGetValue("limit", out var limit))
            {
                _query = _query.Take(int.Parse(limit[0]));
            }

            if (query.TryGetValue("skip", out var skip))
            {
                _query = _query.Skip(int.Parse(skip[0]));
            }

            if (query.TryGetValue("fields", out var fields))
            {

                _query.Select<T, object>(new Func<T, object>(x => {
                    var properties = fields[0].Split(',');
                    dynamic projection = new ExpandoObject();

                    foreach (var item in properties)
                    {
                        var field = char.ToUpper(item[0]) + item.Substring(1);
                        projection.Add(field, x.GetType().GetProperty(field).GetValue(x));
                    }

                    return projection;
                })).AsQueryable();
            }

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
                    specifications.Add(x => value.Contains(x[property]));
                }

                if (predicate == CriteriaOperator.IN)
                {
                    specifications.Add(x => !value.Contains(x[property]));
                }

                if (predicate == CriteriaOperator.LIKE) {
                    specifications.Add(x => ((string) x[property]).Contains(value[0]));
                }
            }

            var criteria = new QueryCriteria<T>(_query, specifications);

            context.Result = ModelBindingResult.Success(criteria);
            return Task.CompletedTask;
        }
    }
}