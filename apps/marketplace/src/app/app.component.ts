import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BooksService } from '@growthspace/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'growthspace-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  books$?: Observable<Book[]>;
  constructor(private bookService: BooksService) {
    this.books$ = this.bookService.getBooks('Angular');
  }
}
