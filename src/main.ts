import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './app/components/nav-menu/nav-menu.component';
import { appConfig } from './app/app.config';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavMenuComponent],
  template: `
    <div class="min-h-screen bg-gray-100">
      <header class="bg-primary text-white py-6">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">Ofertas de Produtos</h1>
        </div>
      </header>
      
      <app-nav-menu></app-nav-menu>
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {}

bootstrapApplication(App, appConfig);