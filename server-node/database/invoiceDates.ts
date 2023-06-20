var today = new Date();
var notOverDue = new Date(today)
notOverDue.setDate(notOverDue.getDate() + 20);

export interface IInvoiceDate {
  id: any;
  purchaseDate: any;
  dueDate: any;
  merchant: any;
}

export const invoiceDates: IInvoiceDate[] = [
  {
    id: 1,
    purchaseDate: new Date("2023-01-01"),
    dueDate: notOverDue,
    merchant: "Qliro",
  },
  {
    id: 2,
    purchaseDate: new Date("2023-01-02"),
    dueDate: new Date("2023-01-16"),
    merchant: "Lyko",
  },
  {
    id: 3,
    purchaseDate: new Date("2023-05-02"),
    dueDate: notOverDue,
    merchant: "Parfym",
  },
  {
    id: 4,
    purchaseDate: new Date("2023-05-12"),
    dueDate: notOverDue,
    merchant: "inet",
  },
  {
    id: 5,
    purchaseDate: new Date("2023-01-02"),
    dueDate: new Date("2023-01-07"),
    merchant: "Biltema",
  },
];



