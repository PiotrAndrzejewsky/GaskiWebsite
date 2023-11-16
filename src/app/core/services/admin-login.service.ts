import {Injectable} from '@angular/core';
import {catchError, of, throwError} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class AdminLoginService {

    constructor(private cookies: CookieService) {
    }

    login(password: string) {
        if(password === 'cdv')
            return of('true');
        else
            return throwError(() => {Error('bad password')});
    }

    setAuthToken(token: string) {
        this.cookies.set('authorizationToken', token);
    }


}


