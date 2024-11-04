import { Component, Input } from '@angular/core';
import { Company } from '../../../models/company';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [], // Aquí podrías agregar CommonModule si lo necesitas
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css'] // Corregido de styleUrl a styleUrls
})
export class CompanyViewComponent {
  @Input() company!: Company; // Asegúrate de recibir la empresa como Input
}
