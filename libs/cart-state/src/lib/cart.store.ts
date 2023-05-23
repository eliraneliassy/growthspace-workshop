import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Book } from '@growthspace/book';

export interface CartState {
  cart: Book[];
}

export function createInitialState(): CartState {
  return {
    cart: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart-store' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}