using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {           
        protected readonly DbContextOptions<StoreContext> _options;
        protected readonly IConfiguration _config;

        public StoreContext(DbContextOptions<StoreContext> options, IConfiguration config) : base(options)
        {
            _options = options;
            _config = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to mysql with connection string from app settings
            var connectionString = _config.GetConnectionString("DefaultConnection");
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        }

        public DbSet<Product> Products { get; set; }
    }
}