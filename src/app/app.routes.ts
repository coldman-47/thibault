import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'restaurant',
    loadComponent: () =>
      import('./tabs/restaurant/restaurant.page').then((m) => m.RestaurantPage),
  },

  {
    path: 'details',
    loadComponent: () =>
      import('./tabs/restaurant/details/details.page').then(
        (m) => m.DetailsPage
      ),
  }

];
