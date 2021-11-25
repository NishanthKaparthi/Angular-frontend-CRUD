import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    /*
    //dummy data
    this.employees = [{
      "id": 1,
      "firstName": "Nishanth",
      "lastName": "Kaparthi",
      "email": "temp@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Niha",
      "lastName": "Kaparthi",
      "email": "Niha@gmail.com"
    }];
    */

    this.getEmployees();
  }

  private getEmployees(){
     this.employeeService.getEmployeeList().subscribe(data => {
       this.employees = data;  
     })
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    }, error => console.log(error))
  }

}
