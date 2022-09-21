using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Contracts;
using Core.Entities;

namespace Core.Specifications
{
    public abstract class Specification<T> : ISpecification<T>
    {
        public Specification()
        {            
        }

        public abstract bool isSatisfiedBy(T entity);

        public ISpecification<T> And(ISpecification<T> criteria) 
        {
            return new AndSpecification<T>(this, criteria);
        }

        public ISpecification<T> Or(ISpecification<T> criteria) 
        {
            return new OrSpecification<T>(this, criteria);
        }

        public ISpecification<T> Not() 
        {
            return new NotSpecification<T>(this);
        }

        public IQueryable<T> AsQueryable(IQueryable<T> query) 
        {
            return query.Where(e => isSatisfiedBy(e));
        }
    }
}