import { IInvoiceDate, invoiceDates } from "./invoiceDates";
import { IInvoicePrice, invoicePrices} from "./invoicePrices";

const getInvoiceDatesFromDB = (): Promise<IInvoiceDate[]> => {
    return new Promise((res) => setTimeout(() => res(invoiceDates), 1500))
};

const getInvoicePricesFromDB = (): Promise<IInvoicePrice[]>  => {
    return new Promise((res) => setTimeout(() => res(invoicePrices), 1000))
};

interface IInvoice extends IInvoiceDate, IInvoicePrice {}

export const getInvoicesFromDB = async (): Promise<IInvoice[]> => {
    const invoicesWithPrices = await getInvoicePricesFromDB();
    const invoicesWithDates = await getInvoiceDatesFromDB();
    const invoices: IInvoice[] = [];
  
    invoicesWithPrices.forEach((invoiceWithPrice, index) => {
      invoices.push({
        ...invoiceWithPrice,
        ...invoicesWithDates[index],
      });
    })

    return invoices;
}
  