using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }   
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public string Type { get; set; }        
        public string Brand { get; set; }     
        public ProductCategoryDto Category { get; set; }
        public string SKU { get; set; }
        public string Url { get; set; }
        public float Rating { get; set; }
    }
}