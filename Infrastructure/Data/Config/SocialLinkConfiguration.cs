using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Infrastructure.Data.Config
{
    public class SocialLinkConfiguration : IEntityTypeConfiguration<SocialLink>
    {
        public void Configure(EntityTypeBuilder<SocialLink> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Url).IsRequired().HasMaxLength(300);
            table.Property(e => e.Name).IsRequired().HasMaxLength(30);

            table.HasOne(e => e.User).WithMany(f => f.SocialLinks).HasForeignKey(e => e.UserId);
        }
    }
}