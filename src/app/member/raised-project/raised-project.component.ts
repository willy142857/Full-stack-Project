import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project/project';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-raised-project',
  templateUrl: './raised-project.component.html',
  styleUrls: ['./raised-project.component.css']
})
export class RaisedProjectComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  raisedProjects: Project[];

  ngOnInit() {
    this.memberService
      .getRaisedProjects()
      .subscribe((raisedProjects: Project[]) => {
        console.log(raisedProjects);
        this.raisedProjects = raisedProjects;
      });
  }
}
