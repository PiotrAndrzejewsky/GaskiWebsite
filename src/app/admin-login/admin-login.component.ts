import { Component } from '@angular/core';
import {AdminLoginService} from "../core/services/admin-login.service";
import {catchError} from "rxjs";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

    public loginForm: FormGroup = this.fb.group({
        password: ['', Validators.required],
    });
    constructor(private loginService: AdminLoginService, private router: Router,  private fb: FormBuilder) {
    }

    login(password: string) {
        this.loginService.login(password, true).subscribe({
            next: (response) => {
                console.log('w next ');
                this.loginService.setAuthToken(response);
                this.router.navigate(['adminDashboard']).then();
            },
            error: (error) => {
                console.log(error.error)
            }
        })
    }
}
