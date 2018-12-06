import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../member';
import { Route, RouterEvent, Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/project/project';
import { ProjectService } from 'src/app/project/project.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}
  user: Member;
  photo: any;
  editPhoto = false;
  ngOnInit() {
    scroll(0, 0);
    this.route.params.subscribe(data => {
      const id = data.id;
      this.httpClient.get(`${environment.api}/profile/${id}`).subscribe(
        (user: Member) => {
          this.user = user;
          if (this.user.profile_URL !== null) {
            this.photo = this.user.profile_URL;
          }
        },
      );
    });
  }
}
