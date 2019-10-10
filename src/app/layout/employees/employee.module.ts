import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class EmployeesModule { }
