using Core.Contracts;
using Core.Entities;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Contracts
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

        public async Task<int> CountAsync(Specification<T> criteria)
        {
            return await store.Set<T>().CountAsync(entity => criteria.isSatisfiedBy(entity));
        }

        public async Task<IReadOnlyList<T>> FindAllAsync()
        {
            return await store.Set<T>().ToListAsync();
        }

        public async Task<IReadOnlyList<T>> FindAllAsync(Specification<T> criteria)
        {
            return await criteria.AsQueryable(store.Set<T>().AsQueryable()).ToListAsync();
        }

        public async Task<T> FindByIdAsync(int id)
        {
            return await store.Set<T>().FindAsync(id);
        }

        public async Task<T> FindOneAsync(Specification<T> criteria)
        {
            return await store.Set<T>().FirstOrDefaultAsync(entity => criteria.isSatisfiedBy(entity));
        }
    }
}