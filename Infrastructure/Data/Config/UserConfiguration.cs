using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Firstname).IsRequired().HasMaxLength(50);
            table.Property(e => e.Lastname).IsRequired().HasMaxLength(50);
            table.Property(e => e.Title).IsRequired().HasMaxLength(75);
            table.Property(e => e.Description).HasColumnType("TEXT");
            table.Property(e => e.Bio).HasColumnType("TEXT");

            table.HasOne(e => e.Role).WithMany(f => f.Users).HasForeignKey(e => e.RoleId);
        }
    }
}