import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { CompanyModel } from '.././models/companyModel';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: CompanyModel[] = new Array<CompanyModel>();
  displayedColumns = ['name', 'address', 'country', 'cnt', 'icons']
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.getCompanies();
    this.companiesService.getReRenderEmitterCompany().subscribe(
      ()=>{this.getCompanies()}
    )}

getCompanies(){
  this.companiesService.getCompanies().subscribe(
    companies=> {
      debugger;
      console.log(companies);
      this.companies = companies;
    },
    error => {
      console.log(error);
    }
  )
}

}
