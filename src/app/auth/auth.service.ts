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
          this.router.navigate(['/login']);
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
          alert('fail');
        }
      });
  }

  retrievePassword(user: any) {
    return this.httpClient.post(`${environment.api}/retrievepassword`, user);
  }

  resetPassword(user: any) {
    return this.httpClient.patch(`${environment.api}/resetpassword`, user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return (localStorage.getItem('token') !== null &&
      !this.jwtHelper.isTokenExpired());
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
}
