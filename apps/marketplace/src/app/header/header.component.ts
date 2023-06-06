import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@growthspace/cart-state';
import { Observable } from 'rxjs';
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'marketplace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, RouterLink]
})
export class HeaderComponent {
  numOfItemsInCart$: Observable<number> = this.cartState.numberOfITemInCart();

  constructor(private cartState: CartService) {

  }
}
