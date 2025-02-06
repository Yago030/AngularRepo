import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  // { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) },
  { path: '**', redirectTo: 'countries' }, //cuando entra sin url base es decir sin ruta, va directo a home
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), //forroot cuando es el primer routing, sino es forchild
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
