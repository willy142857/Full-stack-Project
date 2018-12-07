import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project, Category, Feedback } from '../project';
import { AuthService } from 'src/app/auth/auth.service';

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
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    scroll(0, 0);
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
    console.log(this.project);
    if (this.authService.isLogin()) {
      this.projectService.editProject(this.project, this.id, this.feedbacks).subscribe((data: any) => {
        if (data.success) {
          alert('修改成功');
          this.router.navigateByUrl('/');
        }
      });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  readURL(input) {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = e => {
        this.img = reader.result;
        this.project.img_path = this.img;
      };
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
