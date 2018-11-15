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
  register(user: any) {
    return this.httpClient.post(`${environment.api}/register`, user);
  }
  login(user: any) {
    this.httpClient
      .post(`${environment.api}/login`, user)
      .subscribe((data: any) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl(this.redirectUrl);
        } else {
          alert('fail');
        }
      });
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return localStorage.getItem('token') !== '';
  }
}
