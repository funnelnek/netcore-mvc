using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Specifications;

namespace Core.Contracts
{
    public interface IRepository<T> where T : Entity
    {
        Task<IReadOnlyList<T>> FindAllAsync();
        Task<IReadOnlyList<T>> FindAllAsync(Specification<T> criteria);
        Task<T> FindOneAsync(Specification<T> criteria);
        Task<T> FindByIdAsync(int id);
        Task<int> CountAsync();
        Task<int> CountAsync(Specification<T> criteria);
    }
}