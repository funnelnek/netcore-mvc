namespace Core.Entities
{
    public class ProductRating : Entity
    {
        public long AuthorId { get; set; }
        public long ProductId { get; set; }       
        public Product Product { get; set; }
        
    }
}