import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRouteSearchResultComponent } from './air-route-search-result.component';

describe('AirRouteSearchResultComponent', () => {
  let component: AirRouteSearchResultComponent;
  let fixture: ComponentFixture<AirRouteSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirRouteSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRouteSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
