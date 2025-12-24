import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-card',
  imports: [MatIcon,RouterLink],
  templateUrl: './login-card.html',
  styleUrl: './login-card.css',
})
export class LoginCard {

}
