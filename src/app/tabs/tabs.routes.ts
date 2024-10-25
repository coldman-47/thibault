import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/produits',
        pathMatch: 'full',
      },
      {
        path: 'produits',
        loadComponent: () =>
          import('./produits/produits.page').then((m) => m.ProduitsPage),
      },
      {
        path: 'produits-list',
        loadComponent: () =>
          import('./produits-list/produits-list.page').then(
            (m) => m.ProduitsListPage
          ),
      },
      {
        path: 'restaurants',
        loadComponent: () =>
          import('./restaurant/restaurant.page').then((m) => m.RestaurantPage),
      },
      {
        path: 'bateaux',
        loadComponent: () => import('./bateaux/bateaux.page').then( m => m.BateauxPage)
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./contacte/contacte.page').then((m) => m.ContactePage),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/produits',
    pathMatch: 'full',
  },
  {
    path: 'produits-list',
    loadComponent: () =>
      import('./produits-list/produits-list.page').then(
        (m) => m.ProduitsListPage
      ),
  }
];
