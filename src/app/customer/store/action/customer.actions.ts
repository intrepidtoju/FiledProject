import { createAction, props } from '@ngrx/store';
import {CustomerModule} from '../../../customer/customer.module';

export const loadCustomers = createAction(
  '[Customer] Load Customers',

  (customer: CustomerModule) => ({customer})
);




