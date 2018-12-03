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
    this.projectService.getProjects().subscribe((project: Project[]) => {
      console.log(project);
      this.projects = project;
    });
  }
}
