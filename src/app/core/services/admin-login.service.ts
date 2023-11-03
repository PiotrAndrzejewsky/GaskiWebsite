import {Injectable} from '@angular/core';
import {catchError, of, throwError} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class AdminLoginService {

    constructor(private cookies: CookieService) {
    }

    login(password: string, respone: boolean) {
        return of('token123').pipe(
        );
    }

    setAuthToken(token: string) {
        this.cookies.set('authorizationToken', token);
    }


}


