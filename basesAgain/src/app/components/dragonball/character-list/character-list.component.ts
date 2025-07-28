import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type {Character} from '../../../interfaces/character.interface'

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {


  characters = input.required<Character[]>();
}
