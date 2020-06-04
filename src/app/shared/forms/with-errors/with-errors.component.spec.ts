import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithErrorsComponent } from './with-errors.component';

describe('WithErrorsComponent', () => {
  let component: WithErrorsComponent;
  let fixture: ComponentFixture<WithErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
