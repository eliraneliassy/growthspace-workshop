import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book.interface';
import {ButtonModule} from "@growthspace/ui";

@Component({
  selector: 'g-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book?: Book;

  @Output() addToCart = new EventEmitter<Book>();

  addToCartHandler() {
    this.addToCart.emit(this.book);
  }
}

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BookComponentModule {}
