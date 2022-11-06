using Core.Contracts;
using API.Dtos.Mappers;
using Infrastructure.Contracts;
using Infrastructure.Data;
using Microsoft.OpenApi.Models;
using Infrastructure.Repositories;
using API.Binders;
using Infrastructure.Services;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers(option => {
                option.ModelBinderProviders.Insert(0, new QueryFilterBinderProvider());
            });

            // Database Context Services
            services.AddDbContext<StoreContext>();

            // Repositories Services
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IProductRepository, ProductRepository>();

            // AutoMapper
            services.AddAutoMapper(typeof(MappingProfiles));

            //Services
            services.AddScoped<ProductService>();

            // CORS Service
            services.AddCors(options => {
                options.AddPolicy("CorsPolicy", policy => {
                    policy
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .WithOrigins("https://localhost:4200");
                });
            });

            // Swagger Service
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPIv5 v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseStaticFiles();
            app.UseCors("CorsPolicy");
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
