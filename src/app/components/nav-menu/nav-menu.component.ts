import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <ul class="flex space-x-4 py-4">
          <li>
            <a routerLink="/"
               routerLinkActive="text-primary"
               [routerLinkActiveOptions]="{exact: true}"
               class="hover:text-primary transition-colors">
              All Offers
            </a>
          </li>
          <li>
            <a routerLink="/categoria/technology"
               routerLinkActive="text-primary"
               class="hover:text-primary transition-colors">
              Technology
            </a>
          </li>
          <li>
            <a routerLink="/categoria/food"
               routerLinkActive="text-primary"
               class="hover:text-primary transition-colors">
              Food
            </a>
          </li>
          <li>
            <a routerLink="/categoria/clothing"
               routerLinkActive="text-primary"
               class="hover:text-primary transition-colors">
              Clothing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class NavMenuComponent {}