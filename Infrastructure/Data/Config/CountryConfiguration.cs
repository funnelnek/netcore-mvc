using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class CountryConfiguration : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> table)
        {
            table.Property(e => e.Name).IsRequired().HasMaxLength(35);
            table.Property(e => e.Code).IsRequired().HasMaxLength(3);

            table.HasIndex(e => e.Name).IsUnique();
            table.HasIndex(e => e.Code).IsUnique();

            table.HasKey(e => e.Id);
        }
    }
}