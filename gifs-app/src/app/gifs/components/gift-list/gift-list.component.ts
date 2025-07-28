import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiftListItemComponent } from "./gift-list-item/gift-list-item.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gift-list',
  imports: [GiftListItemComponent,GiftListItemComponent],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListComponent {


  gifs = input.required<Gif[]>()
 }
