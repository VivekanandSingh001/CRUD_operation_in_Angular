import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { MethodsService } from '../methods.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  employee:any;
  constructor(private http:HttpClient,private router:Router,private methods:MethodsService){}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/comments').subscribe(res=>{
      this.employee=res;
      console.log(res);
    })
  }
  // get(){
  //   this.http.get('http://localhost:3000/comments').subscribe(res=>{
  //     this.employee=res;
  //     console.log(res);
  //   })
  // }
  // onPut(employee: any) {
  //   // Replace 'your_api_endpoint' with the URL of your JSON server API
  //   const apiUrl = `http://localhost:3000/comments/${employee.id}`;
  //   this.http.put(apiUrl, employee).subscribe(
  //     () => {
  //       // Handle successful update
  //       console.log('Data successfully updated');
  //     },
  //     (error) => {
  //       // Handle error
  //       console.error('Error updating data:', error);
  //     }
  //   );
  // }
  onEdit(employee:number): void {
    this.methods.servicePut(employee);
    console.log(employee,"jdbj")
    this.router.navigate(['/create']);
  }
}
