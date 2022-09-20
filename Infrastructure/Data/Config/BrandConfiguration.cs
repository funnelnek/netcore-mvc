using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class BrandConfiguration : IEntityTypeConfiguration<ProductBrand>
    {
        public void Configure(EntityTypeBuilder<ProductBrand> table)
        {
            table
            .Property(e => e.Id)
            .IsRequired();

            table.Property(e => e.Name)
            .IsRequired()
            .HasMaxLength(100);

            table.HasKey(e => e.Id);
            table.HasIndex(e => e.Name).IsUnique();
        }
    }
}