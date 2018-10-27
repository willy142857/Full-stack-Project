import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/images/logo.png';
  constructor(private auth: AuthService) {}
  get isLogin() {
    return this.auth.isLogin;
  }
  ngOnInit() {}
}
