import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Project, Category } from '../project';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  project: any = {};
  categories: Category[];
  nowDate = new Date();
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    scroll(0, 0);
    this.projectService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  onSubmit() {
    //this.projectService.createProject(this.project);
    console.log(this.project);
    this.router.navigateByUrl('/');
  }
}
