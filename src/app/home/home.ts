import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';
import { Hr } from '../hr/hr';

@Component({
  selector: 'app-home',
  imports: [BgComponent,Hr],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
