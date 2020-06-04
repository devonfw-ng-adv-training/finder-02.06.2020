import {Injectable} from '@angular/core';
import {AirRoute, AirRouteSearchCriteria} from '../model/model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirRouteService {
  constructor(private readonly http: HttpClient) {
  }

  search(criteria: AirRouteSearchCriteria): Observable<AirRoute[]> {
    return this.http.get<AirRoute[]>('api/air-routes');
  }
}
