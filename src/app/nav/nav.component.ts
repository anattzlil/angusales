import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomersService } from '../customers.service';
import { CompaniesService } from '../companies.service';
import { CustomerModel } from '../models/customerModel';
import { CompanyModel } from '../models/companyModel';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
value:number;
newCustomer: CustomerModel = new CustomerModel();
companiesNames: {company_id: number, name: string}[] = new Array<{company_id: number, name: string}>();
  constructor(public dialog: MatDialog, private customersService: CustomersService, private companiesService: CompaniesService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.companiesService.getCompaniesName().subscribe(
      companies=> {
        console.log(companies);
        this.companiesNames = companies;
      },
      error => {
        console.log(error);
      }
    )
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '50vw',
      data: { customer: this.newCustomer, companies: this.companiesNames }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.newCustomer = result; 
      console.log(result);
      this.customersService.addCustomer(result).subscribe(
        data=> console.log(data),
        error=>{console.log(error);}
      );
   });
}

  }
