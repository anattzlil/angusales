import { Injectable } from '@angular/core';
import { CustomerModel } from '././models/customerModel';
import { CompanyModel } from '././models/companyModel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';


@Injectable()
export class CustomersService {
customers : CustomerModel[] = new Array<CustomerModel>() ;
companies : CompanyModel[] = new Array<CompanyModel>();
reRenderCustomers : EventEmitter<CustomerModel[]> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerModel[]>{
    return this.http.get<CustomerModel[]>('api/customers');
  }

  customerById(id): Observable<CustomerModel>{
    return this.http.get<CustomerModel>('api/customers/'+id);
  }

  addCustomer(newCustomer): Observable<CustomerModel>{
    return this.http.post<CustomerModel>('api/customers', newCustomer);
  }

  getReRenderEmitterCustomers(){
    return this.reRenderCustomers;
  }

  customersChange(){
    this.reRenderCustomers.emit();
  }

  deleteCustomer(customer){
    console.log(customer.customer.customer_id);
    return this.http.delete<CustomerModel>('api/customers/delete/'+ customer.customer.customer_id);
  }


}


