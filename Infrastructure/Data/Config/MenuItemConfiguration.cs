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
    public class MenuItemConfiguration : IEntityTypeConfiguration<MenuItem>
    {
        public void Configure(EntityTypeBuilder<MenuItem> table)
        {
            table.HasDiscriminator(e => e.Type)
            .HasValue<LinkItem>(MenuItemType.LINK);

            table.HasKey(e => e.Id);
            table.Property(e => e.Label).IsRequired().HasMaxLength(30);
            table.Property(e => e.Position).IsRequired().HasColumnType("SMALLINT");
            table.Property(e => e.Type)
            .IsRequired()
            .HasConversion(
                v => v.ToString(), 
                v => (MenuItemType)Enum.Parse(typeof(MenuItemType), v)
            ).HasDefaultValue(MenuItemType.LINK);


            table.HasOne(e => e.Menu).WithMany(f => f.Items).HasForeignKey(e => e.MenuId);
        }
    }
}