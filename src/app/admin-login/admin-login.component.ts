import { Component } from '@angular/core';
import {AdminLoginService} from "../core/services/admin-login.service";
import {catchError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
    constructor(private loginService: AdminLoginService, private router: Router) {
    }
    login(password: string) {
        this.loginService.login(password, true).subscribe({
            next: (response) => {
                this.loginService.setAuthToken(response);
                this.router.navigate([''])
            },
            error: (error) => {
                console.log(error.error)
            }
        })
    }
}
