using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class DeliveryMethodConfiguration : IEntityTypeConfiguration<DeliveryMethod>
    {
        public void Configure(EntityTypeBuilder<DeliveryMethod> table)
        {
            table
            .Property(e => e.Id)
            .IsRequired();

            table
            .Property(e => e.Name)
            .IsRequired()
            .HasMaxLength(50);

            table
            .Property(e => e.Description)
            .IsRequired()
            .HasMaxLength(200);

            table
            .Property(e => e.DeliveryTime)
            .IsRequired()
            .HasMaxLength(50);

            table
            .Property(e => e.Price)
            .IsRequired()
            .HasColumnType<decimal>("decimal(18, 2)");

            table.HasKey(e => e.Id);
            table.HasIndex(e => e.Name).IsUnique();
        }
    }
}