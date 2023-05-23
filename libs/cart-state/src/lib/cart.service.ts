import { Book } from '@growthspace/book';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartQuery } from './cart.query';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {

    constructor(private cartQuery: CartQuery, private cartStore: CartStore) { }
    getCart(): Observable<Book[]> {
        return this.cartQuery.selectCart$;
    }

    addToCart(book: Book) {
        // const currentState = this.cart$.getValue();
        // const newState = [...currentState, book];
        // this.cart$.next(newState);

        this.cartStore.update((currentState) =>
            ({ ...currentState, cart: [...currentState.cart, book] }))
    }

    removeFromCart(book: Book) {
        // const currentState = this.cart$.getValue();
        // const newState = currentState.filter(b => b.id !== book.id)
        // this.cart$.next(newState);
        this.cartStore.update((currentState) =>
            ({ ...currentState, cart: currentState.cart.filter(b => b.id !== book.id) }))
    }

    numberOfITemInCart(){
        return this.cartQuery.selectNumberOfItemsInCart$;
    }


}