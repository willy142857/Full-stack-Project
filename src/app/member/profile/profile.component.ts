import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../member';
import { Route, RouterEvent, Router } from '@angular/router';
import { Project } from 'src/app/project/project';
import { ProjectService } from 'src/app/project/project.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private projectService: ProjectService
  ) {}
  dasharray = 350;
  user: Member;
  photo: any;
  editPhoto = false;
  ngOnInit() {
    scroll(0, 0);
    this.httpClient.get(`${environment.api}/profile`).subscribe(
      (data: Member) => {
        this.user = data;
        console.log(data);
        if (this.user.profile_URL !== null) {
          this.photo = this.user.profile_URL;
        }
      },
      response => {
        if (response.status === 401) {
          alert('請先登入');
          this.router.navigate(['/login']);
        }
      }
    );
  }

  editProfilePhoto() {
    this.editPhoto = !this.editPhoto;
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
    return Math.floor((end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24);
  }

  onSubmit(form) {
    this.httpClient.put(`${environment.api}/profile`, this.user).subscribe(
      data => {
        alert('修正成功');
        console.log(data);
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
        this.user.photo = this.photo;
      };

      reader.readAsDataURL(input.target.files[0]);
    }
  }
}
