import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomersService } from './customers.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { MaterialImportsModule } from './material-import/material-import.module';
import { MaterializeModule } from 'angular2-materialize';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesService } from './companies.service';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    NavComponent,
    CompaniesComponent,
    CustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [CustomersService, CompaniesService],
  bootstrap: [AppComponent],
  entryComponents: [NavComponent, AddCustomerComponent],
})
export class AppModule { }
