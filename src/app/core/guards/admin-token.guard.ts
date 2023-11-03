import {CanActivateFn, Router} from '@angular/router';
import {inject, Inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const adminTokenGuard: CanActivateFn = (route, state) => {
    const cookies = inject(CookieService);

    return cookies.check('authorizationToken')
};
