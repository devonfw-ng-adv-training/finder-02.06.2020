import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {AirRouteSearchCriteria} from '../../model/model';

@Component({
  selector: 'ar-air-route-overview',
  templateUrl: './air-route-overview.component.html',
  styleUrls: ['./air-route-overview.component.scss']
})
export class AirRouteOverviewComponent {
  criteria: AirRouteSearchCriteria;

  constructor(route: ActivatedRoute) {
    route.paramMap
      .pipe(
        map<ParamMap, AirRouteSearchCriteria>(params => ({
          origin: params.get('origin') || '',
          destination: params.get('destination') || '',
          productCode: params.get('productCode') || '',
          fromDate: params.get('fromDate') || ''
        })),
        tap(criteria => this.criteria = criteria),
        // switchMap()
      )
      .subscribe(criteria => console.log(criteria));
  }
}
