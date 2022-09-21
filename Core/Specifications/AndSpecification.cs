using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Contracts;
using Core.Entities;

namespace Core.Specifications
{
    internal class AndSpecification<T> : CompositeSpecification<T>
    {
        public AndSpecification(ISpecification<T> left, ISpecification<T> right) : base(left, right)
        {
        }

        public override bool isSatisfiedBy(T entity)
        {
            return left.isSatisfiedBy(entity) || right.isSatisfiedBy(entity);
        }
    }
}