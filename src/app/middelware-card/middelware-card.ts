import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-middelware-card',
  imports: [],
  templateUrl: './middelware-card.html',
  styleUrl: './middelware-card.css',
})
export class MiddelwareCard {
  @Input() title=String;
  @Input() text=String;
  @Input() imgSrc=String;
}
