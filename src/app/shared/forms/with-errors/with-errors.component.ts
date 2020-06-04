import {AfterContentInit, Component, ContentChild} from '@angular/core';
import {AbstractControl, FormControlDirective, FormControlName} from '@angular/forms';

@Component({
  selector: 'ar-with-errors',
  templateUrl: './with-errors.component.html',
  styleUrls: ['./with-errors.component.scss']
})
export class WithErrorsComponent implements AfterContentInit {
  @ContentChild(FormControlName, {static: true})
  private formControlName: FormControlName;

  @ContentChild(FormControlDirective, {static: true})
  private formControlDirective: FormControlDirective;

  wrappedControl: AbstractControl;

  ngAfterContentInit(): void {
    this.wrappedControl = this.getWrappedControl();
    if (!this.wrappedControl) {
      console.warn('No form control found');
    }
  }

  private getWrappedControl() {
    return (this.formControlName && this.formControlName.control)
      || (this.formControlDirective && this.formControlDirective.control);
  }
}
