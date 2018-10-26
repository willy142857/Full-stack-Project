import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  ngOnInit() {}

  get model() {
    return this.model;
  }

  onSubmit(form) {
    console.log(this.model);
    this.memberService.member.push(this.model);
    console.log(this.memberService.member);
  }
}
