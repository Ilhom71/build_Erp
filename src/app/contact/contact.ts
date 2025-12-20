import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [BgComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
