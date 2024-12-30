import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <img [src]="product.image" 
           [alt]="product.title"
           class="w-full h-48 object-cover">
      <div class="p-4 space-y-2">
        <h2 class="text-xl font-bold text-primary">{{product.title}}</h2>
        <p class="text-gray-600">{{product.description}}</p>
        <div class="flex justify-between text-sm text-gray-500">
          <span>Store: {{product.store}}</span>
          <span>Category: {{product.category}}</span>
        </div>
        <p class="text-sm text-gray-500">Expires: {{product.expirationDate}}</p>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product!: Product;
}