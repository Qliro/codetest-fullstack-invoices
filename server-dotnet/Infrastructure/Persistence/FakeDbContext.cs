using Microsoft.EntityFrameworkCore;
using Invoices.Domain.Entities;

namespace Invoices.Infrastructure.Persistence;

public class FakeDbContext : DbContext
{
    public FakeDbContext(DbContextOptions<FakeDbContext> options) : base(options)
    { }
    public DbSet<Invoice> Invoices { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase(databaseName: "FakeDatabase");
    }
}