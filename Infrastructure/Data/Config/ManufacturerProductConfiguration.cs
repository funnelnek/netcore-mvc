using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ManufacturerProductConfiguration : IEntityTypeConfiguration<ManufacturerProduct>
    {
        public void Configure(EntityTypeBuilder<ManufacturerProduct> table)
        {
            table.Property(e => e.Id).IsRequired();
            table.Property(e => e.ProductId).IsRequired();
            table.Property(e => e.ManufacturerId).IsRequired();

            table.HasOne(e => e.Product).WithOne(e => e.ManufacturerInfo).HasForeignKey("ManufacturerInfoId");
            table.HasOne(e => e.Manufacturer).WithMany(e => e.Products).HasForeignKey(e => e.ManufacturerId);
            table.HasOne(e => e.CountryOfAssembly).WithMany(e => e.ManufacturedProducts).HasForeignKey(e => e.CountryOfAssemblyId);
            table.HasOne(e => e.CountryOfOrigin).WithMany(e => e.Products).HasForeignKey(e => e.CountryOfOriginId);
            table.HasKey(e => e.Id);
        }
    }
}