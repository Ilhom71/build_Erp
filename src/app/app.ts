import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.html',
  imports: [RouterOutlet,RouterLink],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
   isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
