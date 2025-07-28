import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballSuperPageComponent } from '../dragonball-super/dragonball-super-page.component';

interface Character {
  id: number;
  name: string;
  poder: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent,DragonballSuperPageComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(100);



}
