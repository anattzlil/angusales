import {Component, Inject, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomerModel } from '.././models/customerModel';
import { CompanyModel } from '.././models/companyModel';


@Component({
  selector: 'app-add-customer',
  template: 'passed in {{ data }}',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
customer: CustomerModel = new CustomerModel;
companyNames: any;
constructor( public dialogRef: MatDialogRef<AddCustomerComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

onNoClick(): void {
  this.dialogRef.close();
}
  ngOnInit() {
  }
}
