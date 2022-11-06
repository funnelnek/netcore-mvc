using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Core.Entities
{
    public class User : Entity
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Bio { get; set; }
        public long RoleId { get; set; }
        public Role Role { get; set; }
        public List<SocialLink> SocialLinks { get; set; }
    }
}