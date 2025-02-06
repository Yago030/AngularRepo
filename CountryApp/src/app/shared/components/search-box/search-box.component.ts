import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {


@Output()
public onValue = new EventEmitter <string>();

@Input()
public placeholder: string = '';


emitValue(value: string): void {
  this.onValue.emit(value);
}
}
