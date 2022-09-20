using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Contracts
{
    public interface ISpecification<T>
    {
        bool isSatisfiedBy(T entity);
    }
}