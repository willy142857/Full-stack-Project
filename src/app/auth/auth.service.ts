import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '/';

  constructor(private router: Router, private httpClient: HttpClient, private jwtHelper: JwtHelperService) {}
  register(user: any) {
    this.httpClient.post(`${environment.api}/register`, user).subscribe(
      (data: any) => {
        if (data.success) {
          this.login(user);
        } else {
          alert('fail');
        }
      },
      response => {
        alert(response.error.message);
      }
    );
  }
  login(user: any) {
    this.httpClient
      .post(`${environment.api}/login`, user)
      .subscribe((data: any) => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          this.router.navigateByUrl(this.redirectUrl);
        } else {
          alert('Email或密碼錯誤');
        }
      });
  }

  makeSubscription(data: any) {
    return this.httpClient.post(`${environment.api}/subscribe`, data);
  }

  cancelSubscription(data: any) {
    return this.httpClient.post(`${environment.api}/cancelsubscribe`, data);
  }

  retrievePassword(user: any) {
    return this.httpClient.post(`${environment.api}/retrievepassword`, user);
  }

  resetPassword(user: any) {
    return this.httpClient.patch(`${environment.api}/resetpassword`, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
  }

  isLogin() {
    return (localStorage.getItem('token') !== null &&
      !this.jwtHelper.isTokenExpired(localStorage.getItem('token')));
  }

  // 移到core/service/comment.service
  createComment(comment: any) {
    console.log(comment);
    this.httpClient.post(`${environment.api}/comment`, comment).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          this.router.navigate([`/commodity/${comment.project_id}`]);
        } else {
          alert('fail');
        }
      },
      response => {
        alert(response.error.message);
      }
    );
  }

  orderFeedback(feedback: any) {
    console.log(feedback);
    this.httpClient.post(`${environment.api}/feedback`, feedback).subscribe(
      (data: any) => {
        console.log(data);
        if (!data.success) {
          alert('fail');
        }
      },
      response => {
        alert(response.error.message);
      }
    );
  }
}
