import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRouteOverviewComponent } from './air-route-overview.component';

describe('AirRouteOverviewComponent', () => {
  let component: AirRouteOverviewComponent;
  let fixture: ComponentFixture<AirRouteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirRouteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRouteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
