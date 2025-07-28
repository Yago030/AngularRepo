import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollStateService {
  constructor() { }


    trendingScrollState = signal(0);



}
