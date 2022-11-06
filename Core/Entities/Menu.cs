using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Constants;


namespace Core.Entities
{
    public class Menu : Entity
    {
        public string Name { get; set; }
        public MenuType Type { get; set; }
        public bool IsPrimary { get; set; }
        public List<MenuItem> Items { get; set; }
        public Menu Parent { get; set; }
        public long ParentId { get; set; }
    }
}