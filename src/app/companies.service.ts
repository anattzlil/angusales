import { Injectable } from '@angular/core';
import { CustomerModel } from '././models/customerModel';
import { CompanyModel } from '././models/companyModel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';


@Injectable()
export class CompaniesService {
customers : CustomerModel[] = new Array<CustomerModel>() ;
companies : CompanyModel[] = new Array<CompanyModel>();
reRenderCompanies : EventEmitter<CustomerModel[]> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<CompanyModel[]>{
    return this.http.get<CompanyModel[]>('api/companies');
  }

  getCompaniesName(): Observable<{company_id: number, name: string}[]>{
    return this.http.get<{company_id: number, name: string}[]>('api/companies/names');
  }

  addCompany(company): Observable<CompanyModel>{
    console.log(company);
    return this.http.post<CompanyModel>('api/companies', company);
  }

  getReRenderEmitterCompany(){
    return this.reRenderCompanies;
  }

  CompaniesChanged(){
    this.reRenderCompanies.emit();
  }
}