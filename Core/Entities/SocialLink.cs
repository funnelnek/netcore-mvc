using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class SocialLink : Entity
    {
        public string Url { get; set; }
        public string Name { get; set; }
        public long UserId { get; set; }
        public User User { get; set; }
    }
}