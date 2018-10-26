import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public memberService: MemberService) {}
  get member() {
    return this.memberService.member;
  }
  model: any = {};
  ngOnInit() {}
  onSubmit(form) {
    console.log(form);
    
    console.log(this.memberService.member);
  }
}
