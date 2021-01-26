import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
3
import {CustomerModule} from '../../../customer/customer.module';


export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: CustomerModule[];
}

export const initialState: CustomerState = {
  customers: []
};


export const customerReducer = createReducer(
  initialState,

  on(CustomerActions.loadCustomers,
    (state: CustomerState, {customer}) =>
    ({...state,
      customers: [...state.customers, customer]
    }))

);


export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
