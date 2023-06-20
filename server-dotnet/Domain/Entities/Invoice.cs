namespace Invoices.Domain.Entities
{
    public class Invoice
    {
        public DateTime PurchaseDate { get; set; }
        public DateTime DueDate { get; set; }
        public int Id { get; set; }
        public string Merchant { get; set; }
        public double Total { get; set; }
        public Boolean IsPaid { get; set; }
    }
}


