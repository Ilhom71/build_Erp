import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pricing } from './pricing/pricing';
import { Customers } from './customers/customers';
import { Resources } from './resources/resources';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';

export const routes: Routes = [
    {path:'',component:Home},
    {path:"pricing",component:Pricing},
    {path:"customers",component:Customers},
    {path:"resources",component:Resources},
    {path:'contact',component:Contact},
    {path:"blog",component:Blog}


];
