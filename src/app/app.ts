import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BgComponent } from './bg-component/bg-component';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.html',
  imports: [RouterOutlet,RouterLink],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
