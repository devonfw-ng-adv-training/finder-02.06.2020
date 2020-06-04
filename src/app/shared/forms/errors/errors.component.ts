import {Component, HostBinding, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {filter, map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'ar-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent {
  @HostBinding('class')
  invalidFeedback = 'invalid-feedback';

  errors$: Observable<string[]>;

  @Input()
  set ofControl(control: AbstractControl) {
    this.errors$ = control.statusChanges
      .pipe(
        startWith(control.errors),
        filter(status => status !== 'PENDING'),
        map(() => {
          const errors = control.errors;
          if (errors) {
            return Object.keys(errors);
          }
          return [];
        })
      );
  }
}
