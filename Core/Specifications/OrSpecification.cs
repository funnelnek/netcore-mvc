using Core.Contracts;
using Core.Entities;

namespace Core.Specifications
{
    internal class OrSpecification<T> : CompositeSpecification<T>
    {
        public OrSpecification(ISpecification<T> left, ISpecification<T> right) : base(left, right)
        {
        }

        public override bool isSatisfiedBy(T entity)
        {
            return left.isSatisfiedBy(entity) || right.isSatisfiedBy(entity);
        }
    }
}