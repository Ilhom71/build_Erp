import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';

@Component({
  selector: 'app-customers',
  standalone:true,
  imports: [BgComponent],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

}
