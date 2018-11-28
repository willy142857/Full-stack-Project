import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { Category, Project } from '../project';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dasharray = 350;
  categories: Category[];
  originalProj: Project[];
  projects: Project[];

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;

      this.projectService.getCategories().
        subscribe((categories: Category[]) => {
          this.categories = categories;
        });

      this.projectService.getProjects().subscribe((projects: Project[]) => {
        this.originalProj = projects;
        this.projects = this.originalProj;
        if (id) {
          this.filterProjects(id);
        }
      });

    });
  }

  filterProjects(id: number) {
    this.projects = this.originalProj.filter(project => project.category_id == id);
  }

  progress(project: Project): number {
    const ratio = this.dasharray - (project.curr_amount / project.goal_amount) * this.dasharray;
    return ratio < 0 ? 0 : ratio;
  }

  // 計算剩餘日期
  leftDay(project: Project): number {
    return this.projectService.calcLeftDay(project);
  }
}
