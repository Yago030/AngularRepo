import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,DragonballPageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Santiago';
}
