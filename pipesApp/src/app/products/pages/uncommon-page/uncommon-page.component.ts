import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-uncommon-page',
  imports: [PanelModule,CardModule,CommonModule,FieldsetModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {





  //118n Select
  public name:string = "Santiago ";
  public gender: 'male'|'female' = 'male';



}
