import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPaymentComponent } from './payment/list-payment.component';
import { MakePaymentComponent } from './payment/make-payment.component';

const routes: Routes = [
  { path:'pay', component: MakePaymentComponent},
  { path: 'list', component: ListPaymentComponent},
  // { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
