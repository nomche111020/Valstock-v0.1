import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(userName: string, password: string){
    this.isLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isLoggedIn', this.isLoggedIn ? "true" : "false");
    
  return of(this.isLoggedIn).pipe(
    delay(1000),
    tap(val => { 
       console.log("Is User Authentication is successful: " + val); 
    })
 );
 }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}
