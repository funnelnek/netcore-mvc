using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class DbContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.Brands.Any()) {
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(await File.ReadAllTextAsync("../Infrastructure/Data/Seeds/brands.json"));
                    
                    foreach (var item in brands)
                    {
                        context.Brands.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.ProductTypes.Any()) {
                    var types = JsonSerializer.Deserialize<List<ProductType>>(await File.ReadAllTextAsync("../Infrastructure/Data/Seeds/types.json"));

                    foreach (var item in types)
                    {
                        context.ProductTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Products.Any()) {
                    var products = JsonSerializer.Deserialize<List<Product>>(await File.ReadAllTextAsync("../Infrastructure/Data/Seeds/products.json"));

                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }                    

                    await context.SaveChangesAsync();
                }

                if (!context.DeliveryMethods.Any()) {
                    var deliveryMethods = JsonSerializer.Deserialize<List<DeliveryMethod>>(await File.ReadAllTextAsync("../Infrastructure/Data/Seeds/delivery.json"));

                    foreach (var item in deliveryMethods)
                    {
                        context.DeliveryMethods.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            catch(Exception exception) 
            {
                var logger = loggerFactory.CreateLogger<DbContextSeed>();
                logger.LogError(exception.Message);
            }

        }
    }
}