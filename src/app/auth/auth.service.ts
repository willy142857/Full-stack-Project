import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '/';
  isLogin = false;

  constructor(private router: Router) {}
  checkLogin(email: string, password: string) {
    if (email === '123@gmail.com' && password === '123') {
      this.isLogin = true;
      this.router.navigateByUrl(this.redirectUrl);
      console.log('login success\n');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
