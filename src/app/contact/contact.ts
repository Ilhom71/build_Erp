import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';
import { LoginCard } from "../login-card/login-card";

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [BgComponent, LoginCard],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
