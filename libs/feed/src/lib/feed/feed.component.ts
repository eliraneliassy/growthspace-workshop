import { CartService } from '@growthspace/cart-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Book, BookComponent, BooksService} from '@growthspace/book';
import { Observable } from 'rxjs';
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'growthspace-workshop-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BookComponent, AsyncPipe, NgFor]
})
export class FeedComponent {
  books$?: Observable<Book[]>;
  constructor(private bookService: BooksService, private cartState: CartService) {
    this.books$ = this.bookService.getBooks('Angular');
  }

  addToCart(book: Book) {
    this.cartState.addToCart(book);
  }
}
