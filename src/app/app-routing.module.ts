import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AirRouteOverviewComponent} from './air-route/components/air-route-overview/air-route-overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/air-routes', pathMatch: 'full'},
  {
    path: 'air-routes',
    component: AirRouteOverviewComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
