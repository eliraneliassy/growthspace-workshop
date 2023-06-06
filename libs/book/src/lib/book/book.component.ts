import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { Book } from '../book.interface';
import {ButtonComponent} from "@growthspace/ui";


@Component({
  selector: 'g-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ButtonComponent]
})
export class BookComponent {
  @Input() book?: Book;

  @Output() addToCart = new EventEmitter<Book>();

  addToCartHandler() {
    this.addToCart.emit(this.book);
  }
}

