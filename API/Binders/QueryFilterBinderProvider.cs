using Core.Entities;
using Infrastructure.Utility;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;

namespace API.Binders
{
    public class QueryFilterBinderProvider : IModelBinderProvider
    {
        public IModelBinder GetBinder(ModelBinderProviderContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (context.Metadata.ModelType == typeof(QueryCriteria<Product>))
            {
                return new BinderTypeModelBinder(typeof(QueryFilterBinder<Product>));
            }

            return null;
        }
    }
}