namespace Core.Entities
{
    public class Manufacturer : Entity
    {
        public string Name { get; set; }
        public string Website { get; set; }
        public List<ManufacturerProduct> Products { get; set; }
    }
}