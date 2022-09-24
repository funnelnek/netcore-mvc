using Core.Entities;
using Core.Specifications;
using Infrastructure.Contracts;
using Infrastructure.Data;
using Infrastructure.Utility;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T>
    where T : Entity
    {        
        protected StoreContext store;

        public Repository(StoreContext context)
        {
            store = context;
        }

        public async Task<int> CountAsync()
        {
            return await store.Set<T>().CountAsync();
        }

        public async Task<int> CountAsync(QueryCriteria<T> criteria)
        {
            return await criteria.AsQueryable().CountAsync();
        }

        public async Task<IReadOnlyList<T>> FindAllAsync()
        {
            return await store.Set<T>().ToListAsync();
        }

        public async Task<IReadOnlyList<T>> FindAllAsync(QueryCriteria<T> criteria)
        {
            return await criteria.AsQueryable().ToListAsync();
        }

        public async Task<T> FindByIdAsync(int id)
        {
            return await store.Set<T>().FindAsync(id);
        }

        public async Task<T> FindOneAsync(QueryCriteria<T> criteria)
        {
            return await criteria.AsQueryable().FirstOrDefaultAsync();
        }
    }
}