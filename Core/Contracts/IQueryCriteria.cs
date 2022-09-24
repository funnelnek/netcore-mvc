using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Contracts
{
    public interface IQueryCriteria<T> where T : Entity
    {
        IQueryable<T> AsQueryable();
    }
}