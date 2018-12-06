import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private member: MemberService,
    // private auth: AuthService,
    private router: Router,
    private authService: AuthService
  ) {}

  user = {
    email: '',
    password: '',
    remember: ''
  };

  ngOnInit() {
    scroll(0, 0);
  }

  login() {
    console.log(this.user);
    this.authService.login(this.user);
  }
}
