using Core.Contracts;
using Core.Entities;

namespace Core.Specifications
{
    internal abstract class CompositeSpecification<T> : ISpecification<T>
    {
        protected ISpecification<T> left { get; }
        protected ISpecification<T> right { get; }

        public CompositeSpecification(ISpecification<T> left, ISpecification<T> right) 
        {
            this.left = left;
            this.right = right;
        }

        public abstract bool isSatisfiedBy(T entity);
    }
}