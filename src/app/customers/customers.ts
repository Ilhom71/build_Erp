import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';
import { LoginCard } from "../login-card/login-card";

@Component({
  selector: 'app-customers',
  standalone:true,
  imports: [BgComponent, LoginCard],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

}
