import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Customers } from './customers/customers';
import { Resources } from './resources/resources';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';
import { Auth } from './auth/auth';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [

  // 🔹 ASOSIY SAYT (navbar bor)
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'customers', component: Customers },
      { path: 'resources', component: Resources },
      { path: 'contact', component: Contact },
      { path: 'blog', component: Blog },
    ]
  },

  // 🔹 AUTH (navbar yo‘q)
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: '', component: Auth }
    ]
  }

];
