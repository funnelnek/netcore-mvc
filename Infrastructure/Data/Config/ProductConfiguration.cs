using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Constants;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> table)
        {
            table.Property(p => p.Id).IsRequired();
            table.Property(p => p.SKU).IsRequired().HasMaxLength(16);
            table.Property(p => p.Url).IsRequired().HasMaxLength(255);
            table.Property(p => p.Title).IsRequired().HasMaxLength(100);
            table.Property(p => p.Price).IsRequired().HasColumnType("decimal(18,2)");
            table.Property(p => p.ImageUrl).IsRequired();
            table.Property(p => p.Description).IsRequired().HasMaxLength(255);
            table.Property(p => p.Rating);
            table.Property(p => p.Keywords).HasMaxLength(1000);
            table.Property(p => p.Condition).HasConversion(v => v.ToString(), v => (ProductCondition)Enum.Parse(typeof(ProductCondition), v));

            table.HasKey(e => e.Id);
            
            table.HasIndex(e => e.Url).IsUnique();
            table.HasIndex(e => e.Title).IsUnique();
            
            table.HasOne(e => e.Type).WithMany().HasForeignKey(e => e.TypeId);
            table.HasOne(e => e.Brand).WithMany().HasForeignKey(e => e.BrandId);
            table.HasOne(e => e.Category).WithMany().HasForeignKey(e => e.CategoryId);
            table.HasOne(e => e.IsVariantOf).WithMany().HasForeignKey(e => e.VariantId);

            table.Navigation(e => e.Type).AutoInclude();
            table.Navigation(e => e.Brand).AutoInclude();
            table.Navigation(e => e.Category).AutoInclude();
        }
    }
}