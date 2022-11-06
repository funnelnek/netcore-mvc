namespace Core.Entities
{
    public class Audience : Entity
    {
        public string Name { get; set; }
        public long TypeId { get; set; }
        public AudienceType Type { get; set; }
    }
}