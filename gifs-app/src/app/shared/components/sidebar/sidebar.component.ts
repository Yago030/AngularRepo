import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    constructor ( private gifService : GifsService){}


    get tags():string []{
      return this.gifService.tagsHistory;
    }


    public searchTag (tag:string){
      this.gifService.searchTag(tag);
    }


}
