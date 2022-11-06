using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Constants;


namespace Core.Entities
{
    public class MenuItem : Entity
    {
        public MenuItemType Type { get; set; } // Discriminator
        public string Label { get; set; }
        public int Position { get; set; }
        public Menu Menu { get; set; }
        public long MenuId { get; set; }
    }

    public class LinkItem : MenuItem {
        public string Permalink { get; set; }
    }
}