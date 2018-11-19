import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../member';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    public memberService: MemberService,
    private httpClient: HttpClient
  ) {}
  get member() {
    return this.memberService.member;
  }
  // model: any = {};
  user: Member;
  photo: any;
  ngOnInit() {
    scroll(0, 0);
    this.httpClient
      .get(`${environment.api}/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .subscribe(
        (data: Member) => {
          console.log(data);
          this.user = data;
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
          }
        }
      );
  }
  onSubmit(form) {
    console.log(form);
    this.httpClient
      .put(`${environment.api}/profile`, this.user, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .subscribe(
        (data: Member) => {
          console.log(data);
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
          }
        }
      );
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
