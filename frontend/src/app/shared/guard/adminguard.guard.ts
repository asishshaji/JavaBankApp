import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AdminguardGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (!!localStorage.getItem('adminToken')) {
      return true
    } else {
      this._router.navigate(['admin', 'login'])
      return false
    }
  }
}
