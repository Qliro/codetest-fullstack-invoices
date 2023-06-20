import React from "react";
import { useState } from "react";

export const Invoices = () => {
    const [invoices, setInvoices] = useState<any[]>([]);
    const [fetched, setFetched] = useState(false);

    if (!fetched) {
        fetch("http://localhost:5046/invoices", {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json();
        }).then(json => {
            setInvoices(json);
            setFetched(true)
        });
    }

    if (!fetched) {
        return <div>
            <h1>Invoices</h1>
            <div>Loading ...</div>
        </div>
    }

    const invoiceElements: any[] = [];
    var totalAmount = 0;

    for (let i = 0; i < invoices.length; i++) {
        totalAmount += invoices[i].total;
        invoiceElements.push((
            <div className="invoice">
                <div>{invoices[i].dueDate}</div>
                <div>{invoices[i].merchant}</div>
                <div>{invoices[i].total}</div>
                <div>{invoices[i].isPaid ? "✔️" : "❌"}</div>
            </div>
        ));
    }

    return <div>
        <h1>Invoices</h1>

        <div className="headers">
            <h3>Due date</h3>
            <h3>Seller</h3>
            <h3>Total</h3>
            <h3>Paid</h3>
        </div>

        {invoiceElements}

        <div className="invoice totals">
            <div />
            <div />
            <div>{totalAmount}</div>
            <div />
        </div>
    </div>
};