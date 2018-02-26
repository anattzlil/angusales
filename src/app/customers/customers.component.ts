import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { CustomerModel} from '.././models/customerModel';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers : CustomerModel[] = [];
  displayedColumns = ['firstName', 'lastName', 'name', 'Email', 'phone', 'icons'];
  dataSource : MatTableDataSource<CustomerModel>;
  constructor(private customerService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomers();
    this.customerService.getReRenderEmitterCustomers().subscribe(
      ()=>{this.getCustomers()}
    )
  };

  applyFilter(filterValue: string) {
    console.log(this.dataSource.filter);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    console.log(this.dataSource);
    this.dataSource.filter = filterValue;
    let currentData = (this.dataSource.data);
    this.dataSource = new MatTableDataSource(currentData);
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(
      data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource);
        this.customers = data;
      },
      error => {
        console.log(error);
      })
  };

  deleteCustomer(customer){
    console.log('clicked');
    console.log(customer);
    this.customerService.deleteCustomer({customer}).subscribe(
      data=>{
        console.log(data);
        this.getCustomers();
      },
      error=>{
        console.log(error);
      }
    )
  }

  

}


