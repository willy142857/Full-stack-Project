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
  dasharray = 350;

  ngOnInit() {
    this.memberService
      .getRaisedProjects()
      .subscribe((raisedProjects: Project[]) => {
        console.log(raisedProjects);
        this.raisedProjects = raisedProjects;
        console.log(this.raisedProjects);
      });
  }

  progress(project: Project): number {
    const ratio =
      this.dasharray -
      (project.curr_amount / project.goal_amount) * this.dasharray;
    return ratio < 0 ? 0 : ratio;
  }

  // 計算剩餘日期
  leftDay(project: Project): number {
    const end = new Date(project.ended_at);
    const start = new Date();
    return Math.floor((end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24);
  }
}
