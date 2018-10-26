import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member/member.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/images/logo.png';
  constructor(private member: MemberService) {}
  get isLogin() {
    return this.member.isLogin;
  }
  ngOnInit() {}
}
