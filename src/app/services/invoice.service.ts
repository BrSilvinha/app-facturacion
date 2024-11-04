import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../../models/invoice';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    private invoice: Invoice = invoiceData;

    constructor() { }

    getInvoice(): Invoice {
        const total = this.calculateTotal();
        return { ...this.invoice, total };
    }

    private calculateTotal(): number {
        return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
