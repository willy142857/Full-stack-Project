import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/images/logo.png';

  constructor(private authService: AuthService, private router: Router) {}

  get isLogin() {
    return this.authService.isLogin();
  }
  ngOnInit() {
    scroll(0, 0);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
