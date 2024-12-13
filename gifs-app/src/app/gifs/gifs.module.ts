import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponents } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsService } from './services/gifs.service';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponents,
    CardListComponent,
    GifsCardComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
