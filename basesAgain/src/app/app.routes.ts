import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-component';
import { HeroPageComponentComponent } from './pages/hero/hero-page-component/hero-page-component.component';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero', //una url especial
    component: HeroPageComponentComponent,
  },

  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
   {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**', //cuando presiono cualqueir cosa
    redirectTo: '',
  },
];
