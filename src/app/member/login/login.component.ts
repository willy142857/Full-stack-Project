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
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}
  login(form) {
    this.auth.checkLogin('123@gmail.com', '123');
  }
}
