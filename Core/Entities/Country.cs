using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Country : Entity
    {
        public string Name { get; set; }
        public string Code { get; set; }

        public List<ManufacturerProduct> ManufacturedProducts { get; set; }
        public List<ManufacturerProduct> Products { get; set; }
    }
}