import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private member: MemberService, private router: Router) {}

  ngOnInit() {}
  login(form) {
    this.member.login('123@gmail.com', '123');
    this.router.navigateByUrl('/');
  }
}
