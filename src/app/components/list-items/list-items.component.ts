import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Item } from '../../../models/item';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input() items: Item[] = [];
  @Output() removeItemEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  removeItem(id: number) {
    this.removeItemEventEmitter.emit(id);
  }

  get hasItems(): boolean {
    return this.items && this.items.length > 0; // Verifica si hay ítems
  }
}
