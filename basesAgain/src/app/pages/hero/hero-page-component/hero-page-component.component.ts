import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-hero-page-component',
  imports: [],
  templateUrl: './hero-page-component.component.html',
  styleUrl: './hero-page-component.component.css',
})
export class HeroPageComponentComponent {
  public name = signal('Ironman');
  public age = signal(45);
  public description = computed(() => this.name() + ' ' + this.age())


  public getHeroDescription() {
    return this.description();
  }

  public changeHero() {
    this.age.set(22);
    this.name.set('Spiderman');
  }

  public resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  public changeAge(){
    this.age.set(60);
  }
}
