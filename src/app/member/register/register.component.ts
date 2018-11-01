import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private memberService: MemberService, private router: Router) {}
  model: any = {};
  ngOnInit() {
    scroll(0, 0);
  }
  onSubmit(form) {
    console.log(this.model);
    this.memberService.member.name = this.model.name;
    this.memberService.member.mail = this.model.mail;
    this.memberService.member.phone = this.model.phone;
    this.memberService.member.password = this.model.password;
    console.log(this.memberService.member);
    this.router.navigateByUrl('/');
  }
}
