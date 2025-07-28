import { Routes } from '@angular/router';
import { BasicPageComponent } from './products/pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './products/pages/uncommon-page/uncommon-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadComponent: () => import('./products/pages/basic-page/basic-page.component').then(m => m.BasicPageComponent) },
  { path: 'numbers', loadComponent: () => import('./products/pages/numbers-page/numbers-page.component').then(m => m.NumbersPageComponent) },
  { path: 'uncommon', loadComponent: () => import('./products/pages/uncommon-page/uncommon-page.component').then(m => m.UncommonPageComponent) },
  { path: '**', redirectTo: 'products' }
];
