import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './lib.routes';
import { CartComponent } from './cart/cart.component';
import { BookComponentModule } from '@growthspace/book';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes),
    BookComponentModule
    
  ],
  declarations: [CartComponent],
})
export class CartModule {}
