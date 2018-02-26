import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customerModel';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../customers.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  tiles: Array<{mail:string, name: string, cols:number, rows: number}>
  
customer: CustomerModel = new CustomerModel;
  constructor(private route: ActivatedRoute, private customersService: CustomersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customersService.customerById(params.id).subscribe(
        (customer)=>{
        console.log(customer);
        this.customer = customer[0];
        this.tiles = [
          {mail: '', name: '', cols: 1, rows: 4},
          {mail: '1',name: this.customer.firstName + ' ' + this.customer.lastName, cols: 1, rows: 4},
          {mail: '1',name: this.customer.firstName + ' ' + this.customer.lastName, cols: 1, rows: 2},
          {mail: '',name: '', cols: 1, rows: 2},
          {mail: this.customer.Email + ' | ' + this.customer.phone,name: '', cols: 1, rows: 2},
          {mail: '1',name: '', cols: 1, rows: 2},
          {mail: '',name: '', cols: 1, rows: 2}
        ];
        console.log(this.customer);
        },
        (error)=>console.log(error)
      );
     });
  }

}
