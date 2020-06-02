import {Component, Input, OnInit} from '@angular/core';
import {AirRouteSearchCriteria} from '../../../model/model';

@Component({
  selector: 'ar-air-route-search',
  templateUrl: './air-route-search.component.html',
  styleUrls: ['./air-route-search.component.scss']
})
export class AirRouteSearchComponent {
  @Input()
  criteria: AirRouteSearchCriteria;
}
