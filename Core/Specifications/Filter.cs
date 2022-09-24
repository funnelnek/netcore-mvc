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
    public class Filter<T> : IFilter<T>
    {
        public string Property { get; set; }
        public object Value { get; set; }
        public string Operator { get; set; } = CriteriaOperator.EQUAL;

        public Filter()
        {
        }

        public Filter(string property, object value, string criteriaOperator)
        {
            Property = property;
            Value = value;
            Operator = criteriaOperator;
        }

        public Func<T, bool> ToPredicate()
        {
            return (T target) => {
               var value = target.GetType().GetProperty(Property).GetValue(target);

                if (Operator == CriteriaOperator.EQUAL)
                {
                    return (double) value == (double) Value;
                }

                if (Operator == CriteriaOperator.NOT_EQUAL)
                {
                    return (double) value != (double) Value;
                }

                if (Operator == CriteriaOperator.GREATER_THAN)
                {
                    return (double) value > (double) Value;
                }

                if (Operator == CriteriaOperator.GREATER_THAN_OR_EQUAL)
                {
                    return (double) value >= (double) Value;
                }

                if (Operator == CriteriaOperator.LESS_THAN)
                {
                    return (double) value < (double) Value;
                }

                if (Operator == CriteriaOperator.LESS_THAN_OR_EQUAL)
                {
                    return (double) value <= (double) Value;
                }

                if (Operator == CriteriaOperator.NOT_IN)
                {
                    return !((object[]) Value).Contains(value);
                }

                if (Operator == CriteriaOperator.IN)
                {
                    return ((object[]) Value).Contains(value);
                }

                throw new ArgumentException("An invalid operator was detected: " + Operator);
            };
        }
    }
}