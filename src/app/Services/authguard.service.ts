import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginServiceService} from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  private loginService: LoginServiceService;

  constructor(private router: Router, authService: LoginServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
    return false;
  }
}
