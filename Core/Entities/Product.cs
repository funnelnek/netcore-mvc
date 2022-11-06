using Core.Attributes;
using Core.Constants;

namespace Core.Entities
{
    [Limit(50)]
    [OrderBy("-price")]
    public class Product : Entity
    {        
        public string SKU { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }   
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public ProductType Type { get; set; }
        public int TypeId { get; set; }
        public ProductBrand Brand { get; set; }
        public int BrandId { get; set; }  
        public string Keywords { get; set; }
        public ProductCondition Condition { get; set; } = ProductCondition.NEW;
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public float Rating { get; set; }
        public Product IsVariantOf { get; set; }
        public int VariantId { get; set; }
        public ManufacturerProduct ManufacturerInfo { get; set; }
        public long ManufacturerInfoId { get; set; }
    }
}