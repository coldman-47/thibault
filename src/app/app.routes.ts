import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'restaurant',
    loadComponent: () => import('./restaurant/restaurant.page').then( m => m.RestaurantPage)
  },
  {
    path: 'contacte',
    loadComponent: () => import('./contacte/contacte.page').then( m => m.ContactePage)
  }

];
