import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {AirRoute, AirRouteSearchCriteria} from '../../model/model';
import {AirRouteService} from '../../services/air-route.service';
import {Observable} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

interface UrlParams {
  origin?: string;
  destination?: string;
  productCode?: string;
  fromDate?: string;
}

@Component({
  selector: 'ar-air-route-overview',
  templateUrl: './air-route-overview.component.html',
  styleUrls: ['./air-route-overview.component.scss']
})
export class AirRouteOverviewComponent {
  criteria$: Observable<AirRouteSearchCriteria>;
  result$: Observable<AirRoute[]>;

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              airRoutes: AirRouteService) {
    this.criteria$ = route.paramMap
      .pipe(mapUrlParamsToSearchCriteria());
    this.result$ = this.criteria$
      .pipe(searchAirRoutesByCriteriaUsing(airRoutes));
  }

  updateUrlParamsWith(criteria: AirRouteSearchCriteria) {
    const params: UrlParams = {};
    if (criteria.origin != null) {
      params.origin = criteria.origin;
    }
    if (criteria.destination != null) {
      params.destination = criteria.destination;
    }
    if (criteria.productCode != null) {
      params.productCode = criteria.productCode;
    }
    if (criteria.fromDate != null) {
      params.fromDate = criteria.fromDate;
    }
    this.router.navigate([params], {relativeTo: this.route});
  }
}

function searchAirRoutesByCriteriaUsing(airRoutes: AirRouteService) {
  return switchMap<AirRouteSearchCriteria, Observable<AirRoute[]>>(criteria => {
    return airRoutes.search(criteria);
  });
}

function mapUrlParamsToSearchCriteria() {
  return map<ParamMap, AirRouteSearchCriteria>(params => ({
    origin: params.get('origin') || '',
    destination: params.get('destination') || '',
    productCode: params.get('productCode') || '',
    fromDate: params.get('fromDate') || ''
  }));
}
