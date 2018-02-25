import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { CustomerModel} from '.././models/customerModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  dataSource : any;
  customers : CustomerModel[] = new Array<CustomerModel>();
  displayedColumns = ['firstName', 'lastName', 'name', 'Email', 'phone']
  constructor(private customerService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomers();
    this.dataSource = this.customers;
  };

  getCustomers(){
    this.customerService.getCustomers().subscribe(
      customers => {
        console.log(customers);
        this.customers = customers;
      },
      error => {
        console.log(error);
      })
  };

}


