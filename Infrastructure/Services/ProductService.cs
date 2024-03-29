using Core.Entities;
using Infrastructure.Contracts;
using Infrastructure.Utility;

namespace Infrastructure.Services
{
    public class ProductService
    {
        private IProductRepository _repo;

        public ProductService(IProductRepository repository)
        {
            _repo = repository;    
        }

        public async Task<IReadOnlyList<Product>> GetProducts()
        {
            return await _repo.FindAllAsync();
        }

        public async Task<IReadOnlyList<Product>> GetProducts(QueryCriteria<Product> criteria)
        {            
            return await _repo.FindAllAsync(criteria);
        }

        public async Task<IReadOnlyList<ProductBrand>> GetProductBrands()
        {
            return await _repo.GetProductBrandsAsync();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _repo.FindByIdAsync(id);
        }

        public async Task<Product> GetProduct(QueryCriteria<Product> criteria)
        {
            return await _repo.FindOneAsync(criteria);
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypes()
        {
            return await _repo.GetProductTypesAsync();
        }
    }
}
