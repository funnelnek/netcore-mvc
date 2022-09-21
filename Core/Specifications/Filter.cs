using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Constants;
using Core.Contracts;
using Core.Entities;

namespace Core.Specifications
{
    public abstract class Filter<T> : IFilter<T>
    {
        public string Property { get; set; }
        public object Value { get; set; }
        public CriteriaOperator Operator { get; set; }

        public Filter()
        {

        }

        public Filter(string property, object value, CriteriaOperator criteriaOperator)
        {
            Property = property;
            Value = value;
            Operator = criteriaOperator;
        }

        public abstract Func<T, bool> ToPredicate();
    }
}