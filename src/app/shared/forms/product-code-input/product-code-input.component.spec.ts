import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCodeInputComponent } from './product-code-input.component';

describe('ProductCodeInputComponent', () => {
  let component: ProductCodeInputComponent;
  let fixture: ComponentFixture<ProductCodeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCodeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
