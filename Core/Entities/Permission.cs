using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Permission : Entity
    {
        public string Name { get; set; }
        public long RoleId { get; set; }
        public Role Role { get; set; }
    }
}