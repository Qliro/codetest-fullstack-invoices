using Invoices.Domain.Interfaces;
using Invoices.Infrastructure.Persistence;
using Invoices.Infrastructure.Repositories;

namespace Invoices.Infrastructure;

public class UnitOfWork : IUnitOfWork
{
    private readonly FakeDbContext _context;
    private IInvoiceRepository _invoiceRepository;

    public UnitOfWork(FakeDbContext context)
    {
        _context = context;
    }
    public IInvoiceRepository InvoiceRepository => _invoiceRepository ??= new InvoiceRepository(_context);
}
