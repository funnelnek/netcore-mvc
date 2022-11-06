namespace Core.Entities
{
    public class Category : Entity
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public int ParentId { get; set; }
        public Category Parent { get; set; }
    }
}   