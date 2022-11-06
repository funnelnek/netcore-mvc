using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class AudienceTypeConfiguration : IEntityTypeConfiguration<AudienceType>
    {
        public void Configure(EntityTypeBuilder<AudienceType> table)
        {
            table.HasKey(e => e.Id);
            table.Property(e => e.Type).HasMaxLength(50);
            table.HasIndex(e => e.Type).IsUnique();
        }
    }
}