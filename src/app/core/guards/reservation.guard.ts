import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const reservationGuard: CanActivateFn = (route, state) => {
  const cookies = inject(CookieService);
    const router = inject(Router)


    if(cookies.check('reservation'))
        return true;

    router.navigate(['']).then();
    return false;
};
