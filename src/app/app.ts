import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'opencrafts-website';
}
