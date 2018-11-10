import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project/project.service';
import { Project } from 'src/app/project/project';

@Component({
  selector: 'app-home-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  projects: Project[];
  dasharray = 350;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((project: Project[]) => {
      console.log(project);
      this.projects = project;
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
    const start = new Date(project.started_at);
    return (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;
  }
}
