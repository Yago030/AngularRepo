import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from "./shared/components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenuComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
   public title = 'SantFsSsSsSiago berfsFdfFffFferat';
}
