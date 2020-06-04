import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AirRouteSearchCriteria} from '../../../model/model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ar-air-route-search',
  templateUrl: './air-route-search.component.html',
  styleUrls: ['./air-route-search.component.scss']
})
export class AirRouteSearchComponent {
  searchForm: FormGroup;

  @Input()
  set criteria(newValue: AirRouteSearchCriteria) {
    this.searchForm.setValue(newValue);
  }

  @Output()
  criteriaChange = new EventEmitter<AirRouteSearchCriteria>();

  constructor() {
    this.searchForm = new FormGroup({
      origin: new FormControl(null,
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)]),
      destination: new FormControl(null, Validators.required),
      productCode: new FormControl(null, Validators.required),
      fromDate: new FormControl(null, Validators.required)
    });
  }

  notifyOnChange() {
    this.criteriaChange.emit(this.searchForm.value);
  }
}
