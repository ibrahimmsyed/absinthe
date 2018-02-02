import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(router: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return false;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return true;
  }
}