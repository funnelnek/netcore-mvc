using Core.Contracts;
using Infrastructure.Data;

namespace Infrastructure.Contracts
{
    public abstract class Repository<T> : IRepository<T>    
    {        
        protected StoreContext store;

        public Repository(StoreContext context)
        {
            store = context;
        }

        public Task<int> Count()
        {
            throw new NotImplementedException();
        }

        public Task<int> Count(ISpecification<T> criteria)
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<T>> FindAll()
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<T>> FindAll(ISpecification<T> criteria)
        {
            throw new NotImplementedException();
        }

        public Task<T> FindById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<T> FindOne(ISpecification<T> criteria)
        {
            throw new NotImplementedException();
        }
    }
}