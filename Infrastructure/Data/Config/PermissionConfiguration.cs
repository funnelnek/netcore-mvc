using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class PermissionConfiguration : IEntityTypeConfiguration<Permission>
    {
        public void Configure(EntityTypeBuilder<Permission> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Name).IsRequired().HasMaxLength(50);
            
            table.HasOne(e => e.Role).WithMany(f => f.Permissions).HasForeignKey(e => e.RoleId);
        }
    }
}