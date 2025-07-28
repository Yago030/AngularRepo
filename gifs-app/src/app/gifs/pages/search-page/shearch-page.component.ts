import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-shearch-page',
  imports: [GiftListComponent],
  templateUrl: './shearch-page.component.html',
  styleUrl: './shearch-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ShearchPageComponent {

  gifService = inject(GifsService);
  gifs = signal<Gif[]>([])


  onsearch(query:string){
    this.gifService.searchGif(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }

}
