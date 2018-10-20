import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private memberService: MemberService) {}
  model: any = {};
  ngOnInit() {}
  onSubmit(form) {
    console.log(this.model);
    this.memberService.member.push(this.model);
    console.log(this.memberService.member);
  }
}
