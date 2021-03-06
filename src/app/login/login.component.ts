import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
  
    constructor(private router: Router) {}

    ngOnInit() {}

    onLogin(form: NgForm) {
        if (form.invalid) {
            return;
          }
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
   
}
