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
  // test data
  project: Project = {
    fundraiser: '約瑞柯文哲',
    email: 'qwerty@gmail.com',
    name: '練肖話',
    category_id: 7,
    category_name: '..',
    brief: '票投姚文智，電狼3-4',
    started_at: '2018-12-08',
    ended_at: '2018-12-09',
    goal_amount: 94879487,
    description: '朋友買了一件衣料，綠色的底子帶白色方格，\
      當她拿給我們看時，一位對圍棋十分感與趣的同學說：「啊，好像棋盤似的。」\
      「我看倒有點像稿紙。」我說。\
      「真像一塊塊綠豆糕。」一位外號叫「大食客」的同學緊接著說。\
      我們不禁哄堂大笑，同樣的一件衣料，每個人卻有不同的感覺。\
      那位朋友連忙把衣料用紙包好，她覺得衣料就是衣料，不是棋盤，也不是稿紙，更不是綠豆糕。',
    feedbacks: [this.getNewProj()],
    img_path: null,
    relative_web: 'google.com',
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
      date: null,
      price: null,
      description: null
    };
  }
}
