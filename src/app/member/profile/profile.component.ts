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
  photo: any;
  ngOnInit() {
    scroll(0, 0);
  }
  onSubmit(form) {
    console.log(form);

    console.log(this.memberService.member);
  }

  readURL(input) {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        this.photo = reader.result;
      };

      reader.readAsDataURL(input.target.files[0]);
    }
  }
}
