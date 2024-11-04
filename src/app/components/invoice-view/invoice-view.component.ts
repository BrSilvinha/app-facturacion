import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  standalone: true,
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent {
  @Input() id!: number;
  @Input() name!: string;
}
