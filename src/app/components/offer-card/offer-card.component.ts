import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-4 space-y-2">
        <h2 class="text-xl font-bold text-primary">{{offer.titulo}}</h2>
        <p class="text-gray-600">{{offer.descricao}}</p>
        <div class="flex justify-between text-sm text-gray-500">
          <span>Store: {{offer.loja_associada}}</span>
          <span>Category: {{offer.categoria}}</span>
        </div>
        <p class="text-sm text-gray-500">Expires: {{offer.data_expiracao | date}}</p>
        <img  
             [alt]="offer.titulo"
             class="w-full h-48 object-cover rounded-md">
      </div>
    </div>
  `
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}