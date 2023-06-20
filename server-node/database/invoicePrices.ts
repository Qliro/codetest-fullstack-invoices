var today = new Date();
var notOverDue = new Date(today)
notOverDue.setDate(notOverDue.getDate() + 20);

export interface IInvoicePrice {
  id: any;
  merchant: any;
  total: any;
  isPaid: any;
}

export const invoicePrices: IInvoicePrice[] = [
  {
    id: 1,
    merchant: "Qliro",
    total: 100.0,
    isPaid: true,
  },
  {
    id: 2,
    merchant: "Lyko",
    total: 200.0,
    isPaid: false,
  },
  {
    id: 3,
    merchant: "Parfym",
    total: 300.0,
    isPaid: true,
  },
  {
    id: 4,
    merchant: "inet",
    total: 400.0,
    isPaid: false,
  },
  {
    id: 5,
    merchant: "Biltema",
    total: 500.0,
    isPaid: true,
  },
];