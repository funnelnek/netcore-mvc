using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class CategoryDto
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string Parent { get; set; }
    }
}