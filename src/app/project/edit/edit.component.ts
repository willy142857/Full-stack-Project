import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project, Category, Feedback } from '../project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  project: Project;
  categories: Category[];
  feedback: Feedback = {
    date: null,
    price: null,
    description: null
  };
  feedbacks: Feedback[] = [];
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectService.getCategories().
        subscribe((categories: Category[]) => {
          this.categories = categories;
        });
      this.id = params.id;
      this.projectService.getProject(this.id).subscribe((project: Project) => {
        this.project = project;
      });
    });
  }

  addFeedback() {
    this.feedbacks.push(this.feedback);
  }
  onSubmit() {
    this.projectService.editProject(this.project, this.id, this.feedbacks).subscribe((data: any) => {
      if (data.success) {
        this.router.navigateByUrl('/');
      }
      console.log(data.feedbacks);
    });
  }
}
