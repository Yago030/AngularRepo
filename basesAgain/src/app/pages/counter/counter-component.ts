import { Component, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterPageComponent {
  public counter = 10;
  public counterSingal = signal(20);

  public increaseBy(value: number) {
    this.counter += value;
    this.counterSingal.update((current) => current + value);
  }

  public decreaseBy(value: number) {
    this.counter -= value;
    this.counterSingal.update((current) => current - value);
  }

  public reset() {
    this.counter = 10;
    this.counterSingal.set(0);
  }
}
