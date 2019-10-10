import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';


import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeComponent } from '../employees/employee/employee.component';


@NgModule({
  declarations: [Screen1Component,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    Screen1RoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
 
  
})
export class Screen1Module { }
