using Invoices.Infrastructure.Persistence;
using Invoices.Domain.Entities;

namespace Invoices.Infrastructure
{
    public static class FakeDbSeeder
    {
        public static Task SeedAsync(FakeDbContext db)
        {
            db.Invoices.Add(new Invoice
            {
                Id = 1,
                Merchant = "Qliro",
                Total = 100,
                IsPaid = false,
                PurchaseDate = DateTime.Parse("2023-01-01"),
                DueDate = DateTime.Today.AddDays(20),
            });
            db.Invoices.Add(new Invoice
            {
                Id = 2,
                Merchant = "Lyko",
                Total = 200,
                IsPaid = false,
                PurchaseDate = DateTime.Parse("2023-01-02"),
                DueDate = DateTime.Parse("2023-01-16"),
            });
            db.Invoices.Add(new Invoice
            {
                Id = 3,
                Merchant = "Parfym",
                Total = 300,
                IsPaid = true,
                PurchaseDate = DateTime.Parse("2023-05-02"),
                DueDate = DateTime.Today.AddDays(20)
            });
            db.Invoices.Add(new Invoice
            {
                Id = 4,
                Merchant = "inet",
                Total = 400,
                IsPaid = false,
                PurchaseDate = DateTime.Parse("2023-05-12"),
                DueDate = DateTime.Today.AddDays(20)
            });
            db.Invoices.Add(new Invoice
            {
                Id = 5,
                Merchant = "Biltema",
                Total = 500,
                IsPaid = true,
                PurchaseDate = DateTime.Parse("2023-01-02"),
                DueDate = DateTime.Parse("2023-01-07")
            });
            return db.SaveChangesAsync();
        }
    }
}


