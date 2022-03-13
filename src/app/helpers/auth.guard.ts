import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let val: any = localStorage.getItem("isLoggedIn");
    let returnValue: any;

    if(val != null && val == "true"){
      if(url == "/login")
        this.router.parseUrl('/gallery');
      else
        returnValue = true;
    } else{
      returnValue = this.router.parseUrl('/login');
    }
    return returnValue;
  }
  
}
