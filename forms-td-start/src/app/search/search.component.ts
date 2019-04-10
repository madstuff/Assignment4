import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from '../employee-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search;
  employees = [];

  constructor(private employeeData: EmployeeDataService) { }

  ngOnInit() {
    this.employees = this.employeeData.employees;
  }

}
