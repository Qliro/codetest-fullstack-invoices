using Microsoft.EntityFrameworkCore;
using Invoices.Infrastructure.Persistence;
using Invoices.Domain.Interfaces;

namespace Invoices.Infrastructure.DependencyInjection
{
    public static class InfrastructureRegister
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddDbContext<FakeDbContext>(options =>
                    options.UseInMemoryDatabase("InvoiceDb").EnableSensitiveDataLogging()
                        .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking),
                ServiceLifetime.Transient);
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}

