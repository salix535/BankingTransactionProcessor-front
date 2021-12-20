import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionComponent} from "./transaction/transaction.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{
    path: '',
    component: LoginComponent
  },
  {
    path: 'transactions',
    component: TransactionComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
