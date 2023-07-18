import { Injectable } from '@angular/core';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateComponent } from './employees/create/create.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  listId: any;
  isPut: boolean = false;
  EditVal = {};
  constructor(private http: HttpClient) { }
  servicePut(abc: number) {
    this.listId = abc;
  }

  deleteEmployeeById(id: string) {
    const apiUrl = `http://localhost:3000/comments/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(apiUrl, { headers });
  }

  clearEditData() {
    this.listId = {};
    this.isPut = false;
  }
}
