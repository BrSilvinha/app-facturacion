import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../../models/item';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent {
  @Output() addItemEventEmitter: EventEmitter<Item> = new EventEmitter<Item>();

  // Definir la propiedad newItem
  newItem: Item = {
    id: 0,
    product: '',
    price: 0,
    quantity: 1,
    total: 0 // Asegúrate de incluir total
  };

  // Función para agregar un nuevo ítem
  addItem() {
    this.addItemEventEmitter.emit({ ...this.newItem, id: this.generateId() });
    this.resetForm();
  }

  private resetForm() {
    this.newItem = { id: 0, product: '', price: 0, quantity: 1, total: 0 };
  }

  private generateId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
