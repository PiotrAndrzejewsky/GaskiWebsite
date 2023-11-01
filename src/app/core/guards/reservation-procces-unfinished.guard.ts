import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const reservationProccesUnfinishedGuard: CanActivateFn = (route, state) => {
  const cookies = inject(CookieService);
  const router = inject(Router)



  if(cookies.get('reservationFinished') === 'false')
    return true

  router.navigate(['']).then();
  return false;

};
