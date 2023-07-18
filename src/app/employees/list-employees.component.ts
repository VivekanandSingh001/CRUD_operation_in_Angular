import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MethodsService } from '../methods.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employee: any;
  changing = {};
  constructor(private http: HttpClient, private router: Router, private methods: MethodsService) { }
  ngOnInit(): void {
    if (this.methods.isPut === true) {
      this.employee = this.methods.EditVal;
      this.methods.isPut = false;
    }
    if (this.methods.isPut === false) {
      this.http.get('http://localhost:3000/comments').subscribe(res => {
        this.employee = res;
        console.log(res);

        this.changing = this.methods.EditVal;
      })
    }
  }
  onEdit(employee: any): void {
    this.methods.servicePut(employee);
    this.methods.isPut = true;
    console.log(employee, "jdbj")
    this.router.navigate(['/create']);
  }
  onDelete(id: string): void {
    this.methods.deleteEmployeeById(id).subscribe(
      () => {
        this.employee = this.employee.filter((emp: Employee) => emp.id !== id);
        console.log('Employee deleted successfully.');
      },
      (error) => {
        console.log('Error deleting employee:', error);
      }
    );
  }
}
