import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from '../employee-data.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  employees = [];
  constructor(private employeeData: EmployeeDataService) { }

  ngOnInit() {
    this.employees = this.employeeData.employees;
  }

}
