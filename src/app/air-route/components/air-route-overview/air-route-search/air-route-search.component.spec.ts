import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRouteSearchComponent } from './air-route-search.component';

describe('AirRouteSearchComponent', () => {
  let component: AirRouteSearchComponent;
  let fixture: ComponentFixture<AirRouteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirRouteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRouteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
