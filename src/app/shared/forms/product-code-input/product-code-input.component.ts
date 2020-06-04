import {Component, ElementRef, forwardRef, Input, Optional, ViewChild} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const productCodes = [
  'FAN',
  'FCO',
  'FCP',
  'FDG',
  'FTF',
  'FUN',
  'FWN',
  'YCO',
  'YCP',
  'YDG',
  'YNB',
  'YNZ',
  'YTF',
  'YUN',
  'ZXB',
  'ZXF',
  'ZXR'
];

@Component({
  selector: 'ar-product-code-input',
  templateUrl: './product-code-input.component.html',
  styleUrls: ['./product-code-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ProductCodeInputComponent),
    multi: true
  }]
})
export class ProductCodeInputComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  @ViewChild('input', {static: true, read: ElementRef})
  inputElement: ElementRef;

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  searchForProductCodes = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => productCodes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1))
    );
  }

  constructor(@Optional() private readonly controlContainer: ControlContainer) {
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }
}
