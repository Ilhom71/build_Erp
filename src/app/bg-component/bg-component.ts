import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-component',
  standalone:true,
  imports: [],
  templateUrl: './bg-component.html',
  styleUrl: './bg-component.css',
})
export class BgComponent {
  @Input() bg_color:string='grey';
}
