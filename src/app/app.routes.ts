import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'bateaux',
    loadComponent: () => import('./bateaux/bateaux.page').then( m => m.BateauxPage)
  },
  {
    path: 'detail-bateau',
    loadComponent: () => import('./bateaux/detail-bateau/detail-bateau.page').then( m => m.DetailBateauPage)
  }

];
