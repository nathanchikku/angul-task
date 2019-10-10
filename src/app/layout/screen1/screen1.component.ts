import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';



@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  constructor(
   
    private EmployeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

}
