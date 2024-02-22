import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { guardsGuard } from './guards/guards.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [guardsGuard],
  },
  { path: 'register', component: RegisterComponent },
];
