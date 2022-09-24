using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class QueryParamDto
    {
        public int Limit { get; set; }
        public string Sort { get; set; }
        public int Skip { get; set; }
        public int Page { get; set; }
        public string Fields { get; set; }
        public string Include { get; set; }
    }
}