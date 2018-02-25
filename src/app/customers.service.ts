import { Injectable } from '@angular/core';
import { CustomerModel } from '././models/customerModel';
import { CompanyModel } from '././models/companyModel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomersService {
customers : CustomerModel[] = new Array<CustomerModel>() ;
companies : CompanyModel[] = new Array<CompanyModel>();

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerModel[]>{
    return this.http.get<CustomerModel[]>('api/customers');
  }

  customerById(id): Observable<CustomerModel>{
    return this.http.get<CustomerModel>('api/cutomers/'+id);
  }

  addCustomer(newCustomer): Observable<CustomerModel>{
    return this.http.post<CustomerModel>('api/customers', newCustomer);
  }
}


