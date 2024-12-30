import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OfferListComponent } from '../../components/offer-list/offer-list.component';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule, OfferListComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-primary mb-8 capitalize">
        {{categoriaTipo}} Ofertas
      </h1>
      
      <div *ngIf="loading" class="text-center py-8">
        <p class="text-lg text-gray-600">Carregando ofertas...</p>
      </div>
      
      <app-offer-list 
        *ngIf="!loading"
        [offers]="offers">
      </app-offer-list>
    </div>
  `
})
export class CategoryPageComponent implements OnInit {
  categoriaTipo: string = '';
  offers: Offer[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoriaTipo = params['type'];
      console.log(this.categoriaTipo)
      this.loadOffers();
    });
  }

  private loadOffers(): void {
    this.loading = true;
    this.offerService.getOffersByCategory(this.categoriaTipo).subscribe({
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