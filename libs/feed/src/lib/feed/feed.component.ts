import { CartState } from '@growthspace/cart-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BooksService } from '@growthspace/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'growthspace-workshop-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  books$?: Observable<Book[]>;
  constructor(private bookService: BooksService, private cartState: CartState) {
    this.books$ = this.bookService.getBooks('Angular');
  }

  addToCart(book: Book) {
    this.cartState.addToCart(book);
  }
}
