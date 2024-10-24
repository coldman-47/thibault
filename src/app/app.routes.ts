import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'bateaux',
    loadComponent: () => import('./bateaux/bateaux.page').then( m => m.BateauxPage)
  }

];
