import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {AgGridModule} from 'ag-grid-angular';
import { ErrorsComponent } from './forms/errors/errors.component';
import { WithErrorsComponent } from './forms/with-errors/with-errors.component';
import { ProductCodeInputComponent } from './forms/product-code-input/product-code-input.component';

@NgModule({
  declarations: [ErrorsComponent, WithErrorsComponent, ProductCodeInputComponent],
  imports: [
    CommonModule, ReactiveFormsModule, NgbTypeaheadModule, AgGridModule
  ],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, NgbTypeaheadModule, AgGridModule,
    ErrorsComponent, WithErrorsComponent, ProductCodeInputComponent]
})
export class SharedModule { }
