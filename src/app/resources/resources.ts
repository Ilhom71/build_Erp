import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';

@Component({
  selector: 'app-resources',
  standalone:true,
  imports: [BgComponent],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {

}
