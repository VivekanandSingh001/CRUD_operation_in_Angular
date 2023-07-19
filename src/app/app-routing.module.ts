import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateComponent } from './employees/create/create.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  {path:'',redirectTo:'/employeee',pathMatch:'full'},
  {path:'employeee',component:ListEmployeesComponent},
  {
    path:'create',component:CreateComponent
  },
  {path:'weather',component:WeatherAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
