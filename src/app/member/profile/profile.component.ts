import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../member';
import { Route, RouterEvent, Router } from '@angular/router';
import { Project } from 'src/app/project/project';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    public memberService: MemberService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  get member() {
    return this.memberService.member;
  }
  projects: Project[];
  dasharray = 350;
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

          this.httpClient
            .get(`${environment.api}/profile/projects`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            })
            .subscribe((message: Project[]) => {
              this.projects = message;
              console.log(message);
            });
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
            this.router.navigate(['/login']);
          }
        }
      );
  }

  progress(project: Project): number {
    const ratio =
      this.dasharray -
      (project.curr_amount / project.goal_amount) * this.dasharray;
    return ratio < 0 ? 0 : ratio;
  }

  leftDay(project: Project): number {
    const end = new Date(project.ended_at);
    const start = new Date(project.started_at);
    return (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;
  }

  onSubmit(form) {
    console.log(this.user);
    this.httpClient
      .put(`${environment.api}/profile`, this.user, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .subscribe(
        (data: Member) => {
          console.log(data);
          alert('修正成功');
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
            this.router.navigate(['/login']);
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
      this.user.photo = input.target.files[0];
      console.log(this.user.photo);
    }
  }
}
