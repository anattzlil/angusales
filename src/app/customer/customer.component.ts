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
customer: any;
  constructor(private route: ActivatedRoute, private customersService: CustomersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customersService.customerById(params.id).subscribe(
        (customer)=>{
        console.log(customer);
        this.customer = customer[0];
        console.log(this.customer);
        },
        (error)=>console.log(error)
      );
     });
  }

  onDelete(){
    this.customersService.deleteCustomer(this.customer).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
  }

}
