import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User[] = [
    { id: '1', name: 'Nomche', surname: 'Bezhanoski', username: 'admin', password: 'admin' }
  ];

  constructor() { }

  isLoggedIn: boolean = false;

  login(userName: string, password: string) {
    this.isLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isLoggedIn', this.isLoggedIn ? "true" : "false");
    localStorage.setItem('Users', JSON.stringify(this.user));

    return of(this.isLoggedIn).pipe(delay(1000));
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

}
