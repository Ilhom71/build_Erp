import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';
import { LoginCard } from "../login-card/login-card";
import { MiddelwareCarusel } from '../middelware-carusel/middelware-carusel';

@Component({
  selector: 'app-customers',
  standalone:true,
  imports: [BgComponent, LoginCard,MiddelwareCarusel],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

}
