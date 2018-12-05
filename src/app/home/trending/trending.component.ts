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

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects.filter(project => (
        this.projectService.calcLeftDay(project) >= 0
      ));
      console.log(this.projects);
    });
  }
}
