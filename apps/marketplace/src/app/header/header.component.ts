import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartState } from '@growthspace/cart-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'marketplace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  numOfItemsInCart$: Observable<number> = this.cartState.numOfItemsInCart();

  constructor(private cartState: CartState) {

  }
}
