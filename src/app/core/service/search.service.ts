import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectService } from 'src/app/project/project.service';
import { Project } from 'src/app/project/project';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchData = {
    keyword: ''
  };
  searchOriginalProj: Project[];
  searchProjects: Project[];

  searchProjectsName: Project[];
  searchProjectsBrief: Project[];
  searchProjectsDescription: Project[];

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private projectService: ProjectService,
    ) {}

  search(keyword) {
    // console.log(keyword);
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.searchOriginalProj = projects;
      this.searchProjectsName = this.searchOriginalProj;
    });

    if (keyword.trim() === '') {
      this.searchProjects = this.searchOriginalProj;
    } else {

      this.searchProjectsName = this.searchOriginalProj.filter(project => project.name.indexOf(keyword) !== -1);
      this.searchProjectsBrief = this.searchOriginalProj.filter(project => project.brief.indexOf(keyword) !== -1);
      this.searchProjectsDescription = this.searchOriginalProj.filter(project => project.description.indexOf(keyword) !== -1);
    }
  }
}
