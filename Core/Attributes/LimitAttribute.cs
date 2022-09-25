using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Attributes
{
    [System.AttributeUsage(System.AttributeTargets.Class | System.AttributeTargets.Property)]
    public class LimitAttribute : System.Attribute  
    {  
        private int _limit;    
        public LimitAttribute(int limit)  
        {  
            _limit = limit;             
        }  

        public int Limit { get { return _limit; } }
    }  
}