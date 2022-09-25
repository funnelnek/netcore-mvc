using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Attributes
{
    [System.AttributeUsage(System.AttributeTargets.Class | System.AttributeTargets.Property)]
    public class OrderByAttribute : System.Attribute
    {
        private string _sortBy;
        public OrderByAttribute(string orderBy)
        {
            _sortBy = orderBy;
        }

        public string OrderBy { get { return _sortBy; } }
    }
}