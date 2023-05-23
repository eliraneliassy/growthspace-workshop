import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { CartState, CartStore } from './cart.store';
import { Observable, map } from 'rxjs';
import { Book } from '@growthspace/book';


@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

    selectCart$: Observable<Book[]> = this.select('cart');
    selectNumberOfItemsInCart$: Observable<number> = this.selectCart$
        .pipe(map((cart: Book[]) => cart.length))
    constructor(protected override store: CartStore) {
        super(store);
    }
}