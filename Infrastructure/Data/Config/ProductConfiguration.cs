using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> table)
        {
            table.HasKey(e => e.Id);
            table.Property(p => p.Id)
            .IsRequired();
            
            table.Property(p => p.Name)
            .IsRequired()
            .HasMaxLength(100);

            table.Property(p => p.Description)
            .IsRequired()
            .HasMaxLength(255);

            table.Property(p => p.Price)
            .HasColumnType("decimal(18,2)");

            table.Property(p => p.ImageUrl)
            .IsRequired();

            table
            .HasOne(f => f.Brand)
            .WithMany()
            .HasForeignKey(p => p.BrandId);

            table
            .HasOne(f => f.Type)
            .WithMany()
            .HasForeignKey(p => p.TypeId);

            table
            .HasIndex(e => e.Name)
            .IsUnique();

            table.Navigation(e => e.Brand).AutoInclude();
            table.Navigation(e => e.Type).AutoInclude();
        }
    }
}