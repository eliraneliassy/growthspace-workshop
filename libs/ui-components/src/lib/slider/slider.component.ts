import {AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input, NgModule, TemplateRef} from '@angular/core';
import {CommonModule, DOCUMENT, NgComponentOutlet, NgFor, NgTemplateOutlet} from '@angular/common';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'g-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet, ButtonComponent, NgFor]
})
export class SliderComponent implements AfterViewInit{
  @Input({required: true}) images: string[] = [];
  @Input() tempalte?: TemplateRef<any>;
  currentPosition = 0;
  slidesPositions: number[] = [];

  navigate = {
    next: () => this.slide(1),
    prev: () => this.slide(-1)
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  slide(directrion: -1 | 1) {
    this.currentPosition += directrion;

    if(this.currentPosition > this.slidesPositions.length - 1) {this.currentPosition = 0}
    if (this.currentPosition < 0) {this.currentPosition = this.slidesPositions.length - 1}

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidesPositions[this.currentPosition],
      behavior: 'smooth'
    })
  }

  ngAfterViewInit(): void {
    this.document.querySelectorAll<HTMLDivElement>('.slide').forEach((div) => {
      this.slidesPositions.push((div.offsetLeft))
    })

    console.log(this.slidesPositions);
  }
}
