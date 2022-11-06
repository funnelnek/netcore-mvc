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
    public class MenuConfiguration : IEntityTypeConfiguration<Menu>
    {
        public void Configure(EntityTypeBuilder<Menu> table)
        {
            table.HasKey(e => e.Id);

            table.Property(e => e.Name).IsRequired().HasMaxLength(35);
            table.Property(e => e.IsPrimary).IsRequired().HasDefaultValue(false);            

            table.Property(e => e.Type)
            .IsRequired()
            .HasDefaultValue(MenuType.STANDARD)
            .HasConversion(v => v.ToString(), v => (MenuType)Enum.Parse(typeof(MenuType), v));

            table.HasMany(e => e.Items).WithOne(f => f.Menu).HasForeignKey(e => e.MenuId);
            table.HasOne(e => e.Parent).WithMany().HasForeignKey(e => e.ParentId);
        }
    }
}