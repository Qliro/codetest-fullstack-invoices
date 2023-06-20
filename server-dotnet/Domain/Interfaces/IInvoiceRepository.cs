using Invoices.Domain.Entities;

﻿namespace Invoices.Domain.Interfaces;

public interface IInvoiceRepository
{
    List<Invoice> GetAll();

    bool UpdateItem(int id);
}
