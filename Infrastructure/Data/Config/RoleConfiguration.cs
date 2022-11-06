using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Name).IsRequired().HasMaxLength(30);

            table.HasMany(e => e.Permissions).WithOne(f => f.Role).HasForeignKey(e => e.RoleId);
            table.HasMany(e => e.Users).WithOne(f => f.Role).HasForeignKey(e => e.RoleId);
        }
    }
}