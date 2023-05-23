import { CartService } from '@growthspace/cart-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '@growthspace/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'growthspace-workshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  cart$: Observable<Book[]> = this.cartState.getCart();
  constructor(private cartState: CartService) { }
}
