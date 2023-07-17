import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['Male', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactPreference: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      department: ['', Validators.required],
      isActive: [true],
      photoPath: ['/assets/4.png'] // You can set a default path or leave it empty
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const formData=this.userForm.value;
      const apiUrl='http://localhost:3000/comments';
      this.http.post(apiUrl,formData).subscribe(
        res=>{
          console.log("data posted successfull");
        },
        (error)=>{
          console.log("some error has Happened");
        }
      )
    }
  }
}
