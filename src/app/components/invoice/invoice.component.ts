import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../../models/invoice';
import { CommonModule } from '@angular/common';
import { InvoiceViewComponent } from "../invoice-view/invoice-view.component";
import { ClientViewComponent } from "../client-view/client-view.component";
import { CompanyViewComponent } from "../company-view/company-view.component";
import { ListItemsComponent } from "../list-items/list-items.component";
import { FormItemComponent } from "../form-item/form-item.component"; // Asegúrate de importar el componente
import { Item } from '../../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemsComponent, FormItemComponent],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  addItem(item: Item) {
    this.invoice.items.push(item);
    this.invoice.total = this.service.getInvoice().total; // O usar el método calculateTotal si es público
  }

  removeItem(id: number) {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    this.invoice.total = this.service.getInvoice().total; // O usar el método calculateTotal si es público
  }
}
