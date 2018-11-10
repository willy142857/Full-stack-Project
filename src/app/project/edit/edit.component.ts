import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  model: any = {};
  category = this.projectService.category;
  project: Project;
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.projectService.getProject(id).subscribe((project: Project) => {
        this.project = project;
      });
    });
  }
  onSubmit(form) {}
}
