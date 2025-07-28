import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.component.html',
  styleUrl: './gift-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListItemComponent {

   imageUrl= input.required<string>();

 }
