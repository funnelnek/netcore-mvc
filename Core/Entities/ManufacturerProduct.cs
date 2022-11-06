namespace Core.Entities
{
    public class ManufacturerProduct : Entity
    {
        public Product Product { get; set; }
        public long ProductId { get; set; }
        public Manufacturer Manufacturer { get; set; }
        public long ManufacturerId { get; set; }
        public int CountryOfAssemblyId { get; set; }
        public Country CountryOfAssembly { get; set; }
        public int CountryOfOriginId { get; set; }
        public Country CountryOfOrigin { get; set; }
        public decimal MRSP { get; set; }   
        public string MPN { get; set; }
    }
}