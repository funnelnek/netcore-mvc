using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Contracts
{
    public interface IRepository<T>
    {
        Task<IReadOnlyList<T>> FindAll();
        Task<IReadOnlyList<T>> FindAll(ISpecification<T> criteria);
        Task<T> FindOne(ISpecification<T> criteria);
        Task<T> FindById(int id);
        Task<int> Count();
        Task<int> Count(ISpecification<T> criteria);
    }
}