import { CartService } from '@growthspace/cart-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Book, BookComponent} from '@growthspace/book';
import { Observable } from 'rxjs';
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'growthspace-workshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, AsyncPipe, BookComponent]
})
export class CartComponent {

  cart$: Observable<Book[]> = this.cartState.getCart();
  constructor(private cartState: CartService) { }
}
