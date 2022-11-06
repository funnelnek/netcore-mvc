using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Infrastructure.Data.Config
{
    public class AudienceConfiguration : IEntityTypeConfiguration<Audience>
    {
        public void Configure(EntityTypeBuilder<Audience> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Name).HasMaxLength(50);
            
            table.HasOne(e => e.Type).WithMany().HasForeignKey(e => e.TypeId);
            table.HasIndex(e => e.Name).IsUnique();
        }
    }
}