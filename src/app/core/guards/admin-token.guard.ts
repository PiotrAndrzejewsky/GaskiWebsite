import { CanActivateFn } from '@angular/router';
import {Inject, Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const adminTokenGuard: CanActivateFn = (route, state) => {
  const cookies = Inject(CookieService);
  return cookies.check('authorizationToken');
};
