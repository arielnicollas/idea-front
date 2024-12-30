import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferFormComponent } from '../../components/offer-form/offer-form.component';
import { OfferListComponent } from '../../components/offer-list/offer-list.component';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, OfferFormComponent, OfferListComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <app-offer-form class="mb-8 block"></app-offer-form>
      
      <div *ngIf="loading" class="text-center py-8">
        <p class="text-lg text-gray-600">Loading offers...</p>
      </div>
      
      <app-offer-list 
        *ngIf="!loading"
        [offers]="offers">
      </app-offer-list>
    </div>
  `
})
export class HomePageComponent implements OnInit {
  offers: Offer[] = [];
  loading = true;

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadOffers();
  }

  private loadOffers(): void {
    this.offerService.getOffers().subscribe({
      next: (offers) => {
        this.offers = offers;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading offers:', error);
        this.loading = false;
      }
    });
  }
}