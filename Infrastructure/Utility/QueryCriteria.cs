using System.Linq.Expressions;
using Core.Contracts;
using Core.Entities;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Utility
{
    public class QueryCriteria<T> : IQueryCriteria<T> where T : Entity
    {
        protected IQueryable<T> query;        

        public QueryCriteria(StoreContext context, List<Expression<Func<T, bool>>> criteria)
        {
            query = context.Set<T>().AsQueryable();
            Criteria = criteria;
        }

        public QueryCriteria(IQueryable<T> query, List<Expression<Func<T, bool>>> criteria)
        {
            this.query = query;
            Criteria = criteria;
        }

        protected List<Expression<Func<T, bool>>> Criteria { get; }
        protected List<Expression<Func<T, object>>> Includes { get; } = new List<Expression<Func<T, object>>>();
        protected List<Expression<Func<T, object>>> OrderBy { get; } = new List<Expression<Func<T, object>>>();
        protected Expression<Func<T, object>> GroupBy { get; private set; }


        public IQueryable<T> AsQueryable()
        {
            if (Criteria.Count() > 0) 
            {
                query = Criteria.Aggregate(query, (current, filter) => current.Where(filter));
            }

            if (OrderBy.Count() > 0)
            {
                var sortable = OrderBy.First();
                
                OrderBy.RemoveAt(0);

                query = OrderBy.Aggregate(query.OrderBy(sortable), (current, sortable) => current.ThenBy(sortable));                               
            }

            if (GroupBy != null)
            {
                query.GroupBy(GroupBy);
            }

            query = Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;
        }

        public void AddInclude(Expression<Func<T, object>> include)
        {
            Includes.Add(include);
        }

        public void AddOrderBy(Expression<Func<T, object>> sortable)
        {
            OrderBy.Add(sortable);
        }

        public void SetGroupBy(Expression<Func<T, object>> groupBy)
        {
            GroupBy = groupBy;
        }
    }
}
