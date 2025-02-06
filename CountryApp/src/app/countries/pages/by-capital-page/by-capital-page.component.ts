import { Component } from '@angular/core';
import { CatService } from '../../services/cats.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  constructor (private CatService : CatService){}

  public searchByCapital(term : string):void{
    console.log('Desde ByCapitalPage ************  ------>')
    console.log({term});
  }

}
