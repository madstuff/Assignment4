import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeDataService} from '../employee-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @ViewChild('formElement') formElement;
  defaultCountry = 'India';
  genders = ['male', 'female'];

  employees = [];

  employee = {
    username: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    country: ''
  };

  constructor(private employeeData: EmployeeDataService) { }

  ngOnInit() {
    this.employees = this.employeeData.employees;
  }

  onSubmit() {
    this.employee.username = this.formElement.value.username;
    this.employee.email = this.formElement.value.email;
    this.employee.dateOfBirth = this.formElement.value.dob;
    this.employee.gender = this.formElement.value.gender;
    this.employee.country = this.formElement.value.country;
    this.employees.push(this.employee);
    console.log(this.employees);
    // console.log(this.employeeData.employees);
    this.formElement.reset();
  }
}
