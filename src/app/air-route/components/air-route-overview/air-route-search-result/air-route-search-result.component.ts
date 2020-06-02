import {Component, Input} from '@angular/core';
import {AirRoute} from '../../../model/model';

@Component({
  selector: 'ar-air-route-search-result',
  templateUrl: './air-route-search-result.component.html',
  styleUrls: ['./air-route-search-result.component.scss']
})
export class AirRouteSearchResultComponent {
  @Input()
  value: AirRoute[];
}
