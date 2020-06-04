import {Component, Input} from '@angular/core';
import {AirRoute} from '../../../model/model';
import {GridOptions, RowDataChangedEvent} from 'ag-grid-community';
import {GridReadyEvent} from 'ag-grid-community/dist/lib/events';

@Component({
  selector: 'ar-air-route-search-result',
  templateUrl: './air-route-search-result.component.html',
  styleUrls: ['./air-route-search-result.component.scss']
})
export class AirRouteSearchResultComponent {
  @Input()
  value: AirRoute[];
  // set value(newAirRoutes: AirRoute[]) {
  //
  // }

  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true
    },
    onRowDataChanged(event: RowDataChangedEvent) {
      event.api.sizeColumnsToFit();
    },
    columnDefs: [
      {headerName: 'Latest Time', field: 'latestAcceptanceTimeOfRouting', sortable: true},
      {headerName: 'Earliest Time', field: 'earliestTimeOfAvailabilityOfRouting'},
      {headerName: 'Origin (1)', field: 'firstSegmentOrigin'},
      {headerName: 'Destination (1)', field: 'firstSegmentDestination'},
      {headerName: 'Origin (2)', field: 'secondSegmentOrigin'},
      {headerName: 'Destination (2)', field: 'secondSegmentDestination'}
    ]
  };


  columnDefs = [
    {headerName: 'Latest Time', field: 'latestAcceptanceTimeOfRouting', sortable: true},
    {headerName: 'Earliest Time', field: 'earliestTimeOfAvailabilityOfRouting'},
    {headerName: 'Origin (1)', field: 'firstSegmentOrigin'},
    {headerName: 'Destination (1)', field: 'firstSegmentDestination'},
    {headerName: 'Origin (2)', field: 'secondSegmentOrigin'},
    {headerName: 'Destination (2)', field: 'secondSegmentDestination'}
  ];

  onGridReady(event: GridReadyEvent) {
    // event.api.sizeColumnsToFit();
  }
}
