import { Component, Input } from '@angular/core';
import { Client } from '../../../models/client';
// Asegúrate de tener la ruta correcta

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [], // Aquí podrías agregar CommonModule si lo necesitas
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css'] // Corregido de styleUrl a styleUrls
})
export class ClientViewComponent {
  @Input() client!: Client; // Asegúrate de recibir el cliente como Input
}
