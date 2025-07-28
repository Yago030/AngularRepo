import { Component, LOCALE_ID } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

import  localEsHn   from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsHn);

@Component({
  selector: 'app-basic-page',
  imports: [PanelModule,CardModule,CommonModule ],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ]
})
export class BasicPageComponent {

  public nameLower: string = "santiago";
  public nameUpper: string = "SANTIAGO";
  public fullName: string = "SanTiAgO BeRgERaT";
  public customDate: Date = new Date();


}
