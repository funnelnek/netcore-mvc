using Core.Contracts;
using Core.Entities;

namespace Core.Specifications
{
    internal class NotSpecification<T> : ISpecification<T>
    {
        protected ISpecification<T> criteria;

        public NotSpecification(ISpecification<T> criteria)
        {
            this.criteria = criteria;
        }

        public bool isSatisfiedBy(T entity)
        {            
            return !criteria.isSatisfiedBy(entity);
        }
    }
}