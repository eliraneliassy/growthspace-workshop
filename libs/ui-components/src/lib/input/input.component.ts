import {ChangeDetectionStrategy, Component, ElementRef, Input, Self, ViewChild} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'g-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf
  ],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: InputComponent,
    //   multi: true
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: InputComponent,
    //   multi: true
    // },

  ]
})
export class InputComponent implements ControlValueAccessor, Validator{
  @ViewChild('input') input?: ElementRef;
  @Input() isRequired =false;
  disabled = false;

  constructor(@Self() protected controlDir: NgControl) {
    this.controlDir.valueAccessor = this;

  }


  onChange(event: any){

  }

  onTouched(event: any){

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    if(this.input){
      this.input.nativeElement.value = obj;
    }

  }

  validate(control: AbstractControl): ValidatorFn[] {
    const validators = control.validator ? [control.validator] : [];

    if(this.isRequired) {
      validators.push(Validators.required)
    }

    return validators;
  }
}
