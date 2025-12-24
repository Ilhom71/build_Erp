import { Component } from '@angular/core';
import { BgComponent } from '../bg-component/bg-component';
import { Hr } from '../hr/hr';
import { Middelware } from '../middelware/middelware';
import { MainLayout } from "../layouts/main-layout/main-layout";
import { MiddelwareCard } from "../middelware-card/middelware-card";
import { MiddelwareCard2 } from "../middelware-card-2/middelware-card-2";
import { LoginCard } from "../login-card/login-card";
import { MiddelwareCarusel } from "../middelware-carusel/middelware-carusel";
import { Faq } from "../faq/faq";

@Component({
  selector: 'app-home',
  imports: [BgComponent, Hr, Middelware, MiddelwareCard, MiddelwareCard2, LoginCard, MiddelwareCarusel, Faq],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
