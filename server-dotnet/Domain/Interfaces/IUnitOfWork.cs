namespace Invoices.Domain.Interfaces;

public interface IUnitOfWork
{
    IInvoiceRepository InvoiceRepository { get; }
}
