import { Injectable } from '@angular/core';
import { ListEmployeesComponent } from './employees/list-employees.component';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  listId:any;
  constructor() { }
  servicePut(abc:number){
    this.listId=abc;
    console.log("coming from services",this.listId);
  }
}
