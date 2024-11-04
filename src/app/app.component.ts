import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceViewComponent } from "./components/invoice-view/invoice-view.component";
import { ClientViewComponent } from "./components/client-view/client-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoiceComponent, CommonModule, RouterOutlet, InvoiceViewComponent, ClientViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-facturacion';
}
