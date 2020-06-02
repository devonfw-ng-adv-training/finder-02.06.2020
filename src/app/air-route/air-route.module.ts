import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AirRouteOverviewComponent} from './components/air-route-overview/air-route-overview.component';
import {AirRouteSearchComponent} from './components/air-route-overview/air-route-search/air-route-search.component';
import {AirRouteSearchResultComponent} from './components/air-route-overview/air-route-search-result/air-route-search-result.component';


@NgModule({
  declarations: [AirRouteOverviewComponent, AirRouteSearchComponent, AirRouteSearchResultComponent],
  imports: [
    SharedModule
  ]
})
export class AirRouteModule { }
