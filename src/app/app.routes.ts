import { Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'categoria/:type', component: CategoryPageComponent }
];