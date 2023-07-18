import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MethodsService } from 'src/app/methods.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  valuesPut: boolean = false;
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private methods: MethodsService, private router: Router) { }

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
      // photoPath: ['/assets/4.png']
      photoPath: ['', Validators.required]
    });
    this.patchFormValues();
    console.log("see the patch values", this.methods.listId, "boooooolean", this.valuesPut);
  }
  onSubmit() {
    if (this.valuesPut === true) {
      if (this.userForm.valid) {
        const apiUrl = `http://localhost:3000/comments/${this.userForm.value.id}`;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        this.http.put(apiUrl, this.userForm.value, { headers }).subscribe(
          (res) => {
            console.log('Data updated successfully');
            this.methods.clearEditData();
            this.router.navigate(['/employeee']);
          },
          (error) => {
            console.log('Error updating data:', error);
          }
        );
      }
    } else if (this.valuesPut === false) {
      console.log(this.userForm.value);
      const formData = this.userForm.value;
      const apiUrl = 'http://localhost:3000/comments';
      this.http.post(apiUrl, formData).subscribe(
        res => {
          this.router.navigate(['/employeee']);
          console.log("data posted successfull");
        },
        (error) => {
          console.log("some error has Happened");
        }
      )
    }
  }
  patchFormValues() {
    const updatedValues = {
      id: this.methods.listId.id,
      name: this.methods.listId.name,
      gender: this.methods.listId.gender,
      email: this.methods.listId.email,
      phoneNumber: this.methods.listId.phoneNumber,
      contactPreference: this.methods.listId.contactPreference,
      dateOfBirth: this.methods.listId.dateOfBirth,
      department: this.methods.listId.department,
      isActive: this.methods.listId.isActive,
      photoPath: this.methods.listId.photoPath,
    };
    console.log("inside patch form values", this.methods.listId.photoPath);
    this.userForm.patchValue(updatedValues);
    this.valuesPut = this.methods.isPut;
  }
  updateValues() {

  }
}
