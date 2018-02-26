
import {Component, Inject, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomerModel } from '.././models/customerModel';
import { CompanyModel } from '.././models/companyModel';


@Component({
  template: 'passed in {{ data }}',
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
company: CompanyModel = new CompanyModel;
companyNames: any;
constructor( public dialogRef: MatDialogRef<AddCompanyComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

onNoClick(): void {
  this.dialogRef.close();
}
  ngOnInit() {
  }
}
