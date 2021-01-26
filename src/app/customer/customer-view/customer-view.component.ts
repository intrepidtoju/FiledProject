import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {CustomerModule} from '../../customer/customer.module';

import {select, Store} from '@ngrx/store';

import {selectCustomers} from '../store/selector/customer.selectors';

import {CustomerState} from '../store/reducer/customer.reducer';

@Component({

  selector: 'app-customer-view',

  templateUrl: './customer-view.component.html',

  styleUrls: ['./customer-view.component.scss']

})

export class CustomerViewComponent {

  customers$: Observable<CustomerModule[]>;

  constructor(private store: Store<CustomerState>) {

    this.customers$ = this.store.pipe(select(selectCustomers));

  }
}

