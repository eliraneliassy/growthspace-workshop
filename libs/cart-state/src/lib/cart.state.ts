import { Book } from '@growthspace/book';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartState {
    private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

    getCart(): Observable<Book[]> {
        return this.cart$.asObservable();
    }

    addToCart(book: Book) {
        const currentState = this.cart$.getValue();
        const newState = [...currentState, book];
        this.cart$.next(newState);
    }

    removeFromCart(book: Book) {
        const currentState = this.cart$.getValue();
        const newState = currentState.filter(b => b.id !== book.id)
        this.cart$.next(newState);
    }

    numOfItemsInCart(): Observable<number> {
        return this.cart$.asObservable().pipe(
            map((cart: Book[]) => cart.length)
        )
    }
}