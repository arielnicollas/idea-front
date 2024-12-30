import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '../../models/offer.model';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      <app-offer-card
        *ngFor="let offer of offers"
        [offer]="offer"
        class="transform transition-transform hover:scale-105">
      </app-offer-card>
    </div>
  `
})
export class OfferListComponent {
  @Input() offers: Offer[] = [];
}