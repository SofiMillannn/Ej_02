import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sheet',
    loadComponent: () => import('./sheet/sheet.page').then( m => m.SheetPage)
  },
  {
    path: 'sheet',
    loadComponent: () => import('./sheet/sheet.page').then( m => m.SheetPage)
  },
];
