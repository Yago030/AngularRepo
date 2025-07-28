import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent { }
