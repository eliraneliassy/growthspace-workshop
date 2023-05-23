import { Route } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const cartRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: CartComponent }
];
