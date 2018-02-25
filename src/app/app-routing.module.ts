import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { CustomersComponent } from './customers/customers.component';
import { CompaniesComponent } from './companies/companies.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'', component: CustomersComponent},
  {path:'companies', component: CompaniesComponent},
  {path:'customers/:id', component: CustomerComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }