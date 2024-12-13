import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: `
    <h5>Buscar : </h5>
    <input type = "text"
     class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `

})

export class SearchBoxComponents  {

  @ViewChild('txtTagInput')
   public  tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifservice :GifsService) { }


  public searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifservice.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }


}
