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
  feedbacks: Feedback[] = [];
  img: any;

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
        this.img = project.img_path;
      });
    });
  }

  onSubmit() {
    this.projectService.editProject(this.project, this.id, this.feedbacks).subscribe((data: any) => {
      if (data.success) {
        this.router.navigateByUrl('/');
      }
    });
  }

  readURL(input) {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        this.img = reader.result;
      };

      reader.readAsDataURL(input.target.files[0]);
      this.project.img_path = input.target.files[0];
    }
  }
  addFeedback() {
    this.project.feedbacks.push(this.getNewProj());
  }

  getNewProj() {
    return {
      id: null,
      date: null,
      price: null,
      description: null,
      backer: null,
      img_path: null,
      updated_at: null
    };
  }
}
