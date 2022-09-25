using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Attributes;

namespace Core.Entities
{
    [Limit(50)]
    [OrderBy("-price")]
    public class Product : Entity
    {        
        public const int DEFAULT_LIMIT = 20;
        public string Name { get; set; }
        public string Description { get; set; }   
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public ProductType Type { get; set; }
        public int TypeId { get; set; }
        public ProductBrand Brand { get; set; }
        public int BrandId { get; set; }        
    }
}