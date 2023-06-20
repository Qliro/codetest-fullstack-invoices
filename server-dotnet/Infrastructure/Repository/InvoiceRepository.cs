using Microsoft.EntityFrameworkCore;
using Invoices.Infrastructure.Persistence;
using Invoices.Domain.Interfaces;
using Invoices.Domain.Entities;

namespace Invoices.Infrastructure.Repositories;

public class InvoiceRepository : IInvoiceRepository
{
    public FakeDbContext Context { get; }

    public InvoiceRepository(FakeDbContext context)
    {
        Context = context;
    }

    public List<Invoice> GetAll()
    {
        var invoices = Context.Invoices.ToList();
        return invoices;
    }

    public bool UpdateItem(int id)
    {
        throw new NotImplementedException();
    }
}
