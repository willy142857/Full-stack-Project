import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Project, Category, Feedback } from '../project';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  project: Project = {
    fundraiser: null,
    email: null,
    name: null,
    category_id: null,
    category_name: null,
    brief: null,
    started_at: null,
    ended_at: null,
    goal_amount: 94879487,
    description: null,
    feedbacks: [this.getNewProj()],
    img_path: null,
    relative_web: null,
  };
  categories: Category[];
  img: any;
  category = this.projectService.category;
  nowDate = new Date();

  constructor(private projectService: ProjectService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    scroll(0, 0);
    this.projectService.getCategories().
      subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  onSubmit() {
    if (this.authService.isLogin()) {
      this.projectService.createProject(this.project).
      subscribe((data: any) => {
        if (data.success) {
          alert('提案成功');
          this.router.navigateByUrl('/');
        } else {
          alert('fail');
        }
      },
      response => {
        alert(response.error.message);
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
      date: null,
      price: null,
      description: null
    };
  }
}
