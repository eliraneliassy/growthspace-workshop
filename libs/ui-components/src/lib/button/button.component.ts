import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'g-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {
  @Input() text = '';
  @Output() clicked = new EventEmitter<void>();

  clickedHandler(event: any){
    this.clicked.emit();
  }
}
