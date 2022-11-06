using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Name).HasMaxLength(50);
            table.Property(e => e.Description).HasColumnType("TEXT").HasMaxLength(5000);
            table.Property(e => e.ImageUrl).HasMaxLength(255);
            table.Property(e => e.Url).HasMaxLength(255);
            
            table.HasOne(e => e.Parent).WithMany().HasForeignKey(e => e.ParentId);
            table.HasIndex(e => e.Name).IsUnique();
        }
    }
}