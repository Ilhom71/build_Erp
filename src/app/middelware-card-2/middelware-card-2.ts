import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-middelware-card-2',
  imports: [],
  templateUrl: './middelware-card-2.html',
  styleUrl: './middelware-card-2.css',
})
export class MiddelwareCard2 {
  @Input() title=String;
  @Input() text=String;
  @Input() imglink=String;
}
