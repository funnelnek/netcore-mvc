using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Constants;

namespace Core.Contracts
{
    public interface IFilter<T>
    {
        public Func<T, bool> ToPredicate();
    }
}