import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customerModel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer: CustomerModel = new CustomerModel;
  constructor() { }

  ngOnInit() {
  }

}
