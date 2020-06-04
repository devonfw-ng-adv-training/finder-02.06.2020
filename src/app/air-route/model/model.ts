export interface AirRouteSearchCriteria {
  origin: string;
  destination: string;
  productCode: string;
  fromDate: string;
}

export interface AirRoute {
  latestAcceptanceTimeOfRouting: string;
  earliestTimeOfAvailabilityOfRouting: string;
  firstSegmentOrigin: string;
  firstSegmentDestination: string;
  secondSegmentOrigin: string;
  secondSegmentDestination: string;
}
