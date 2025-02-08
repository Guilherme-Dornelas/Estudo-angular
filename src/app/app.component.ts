import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrosComponent } from "../componentes/carros/carros.component";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CarrosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudo-app';
}
