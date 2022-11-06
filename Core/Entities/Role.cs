using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Role : Entity
    {
        public string Name { get; set; }
        public List<Permission> Permissions { get; set; }
        public List<User> Users { get; set; }
    }
}