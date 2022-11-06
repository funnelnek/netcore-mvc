using Core.Entities;
using Infrastructure.Utility;


namespace Infrastructure.Contracts
{
    public interface IRepository<T> where T : Entity
    {
        Task<IReadOnlyList<T>> FindAllAsync();
        Task<IReadOnlyList<T>> FindAllAsync(QueryCriteria<T> criteria);
        Task<T> FindOneAsync(QueryCriteria<T> criteria);
        Task<T> FindByIdAsync(int id);
        Task<int> CountAsync();
        Task<int> CountAsync(QueryCriteria<T> criteria);
    }
}