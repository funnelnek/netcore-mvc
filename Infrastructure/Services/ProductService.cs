using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Contracts;
using Core.Entities;
using Infrastructure.Contracts;

namespace Infrastructure.Services
{
    public class ProductService
    {
        private IProductRepository _repo;

        public ProductService(IProductRepository repository)
        {
            _repo = repository;    
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _repo.FindAll();
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync(ISpecification<Product> criteria)
        {
            return await _repo.FindAll(criteria);
        }

        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync()
        {
            return await _repo.GetProductBrandsAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _repo.FindById(id);
        }

        public async Task<Product> GetProductAsync(ISpecification<Product> criteria)
        {
            return await _repo.FindOne(criteria);
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypesAsync()
        {
            return await _repo.GetProductTypes();
        }
    }
}