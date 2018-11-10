import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '/';

  constructor(private router: Router, private httpClient: HttpClient) {}
  checkLogin(email: string, password: string) {
    if (email === '123@gmail.com' && password === '123') {
      this.router.navigateByUrl(this.redirectUrl);
      console.log('login success\n');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  register(user: any) {
    return this.httpClient.post('http://localhost:8000/api/register', user);
  }
  login(user: any) {
    return this.httpClient.post('http://localhost:8000/api/login', user);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return localStorage.getItem('token');
  }
}
