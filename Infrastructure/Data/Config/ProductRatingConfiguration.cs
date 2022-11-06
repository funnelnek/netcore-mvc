using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ProductRatingConfiguration : IEntityTypeConfiguration<ProductRating>
    {
        public void Configure(EntityTypeBuilder<ProductRating> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.ProductId);

            table.HasOne(e => e.Product).WithMany().HasForeignKey(e => e.ProductId);
        }
    }
}