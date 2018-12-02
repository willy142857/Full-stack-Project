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
  constructor(private httpClient: HttpClient, private router: Router,
    private projectService: ProjectService) {}

  user: Member;
  photo: any;
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
