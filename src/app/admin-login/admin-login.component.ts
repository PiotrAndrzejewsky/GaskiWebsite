import {Component, OnDestroy} from '@angular/core';
import {AdminLoginService} from "../core/services/admin-login.service";
import {catchError, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnDestroy {

    private unSubscribe$ = new Subject<void>()

    public loginForm: FormGroup = this.fb.group({
        password: ['', Validators.required],
    });
    constructor(private loginService: AdminLoginService, private router: Router,  private fb: FormBuilder) {
    }

    login(password: string) {
        this.loginService.login(password).pipe(
            takeUntil(this.unSubscribe$),

        ).subscribe({
            next: (response) => {
                this.loginService.setAuthToken(response);
                this.router.navigate(['adminDashboard']).then();
            },
            error: (error) => {
                this.setIncorrectLoginError();
            }
        })
    }

    setIncorrectLoginError() {
        this.loginForm.get('password')?.setErrors({incorrectPassword: true});
    }

    ngOnDestroy() {
        this.unSubscribe$.next();
        this.unSubscribe$.unsubscribe();
    }
}
