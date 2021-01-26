import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerViewComponent} from './customer-view/customer-view.component';

import {StoreModule} from '@ngrx/store';

import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';




@NgModule({
  declarations: [CustomerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [
    CustomerViewComponent
  ]
})
export class CustomerModule {
  [x: string]: string;
  
 }
