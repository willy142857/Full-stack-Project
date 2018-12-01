import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Project, Comment, ProjectPlus} from 'src/app/project/project';
import { ProjectService } from '../project.service';
import { CartsService } from '../../cart/carts.service';
import { CommoditiesService } from './commodities.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  today = new Date();
  user_stars: any = [false, false, false, false, false];
  comment_stars: any = [false, false, false, false, false];
  new_commodity: any;
  list: Project;
  percentage: any;

  comment = {
    project_id: Number,
    rating: Number,
    comment: '',
  };

  feedback = {
    feedback_id: Number,
    project_id: Number,
  };

  tempPro: ProjectPlus;
  followingProjects: ProjectPlus[] = [];
  followingProjectsInfo: any;

  get messages() {
    return this.commoditiesService.messages;
  }

  diff: number;
  diffDays: number;
  date() {
    if (new Date().getTime() < new Date(this.list.started_at).getTime()) {
      return '!!未開始!!  ';
    } else if (new Date().getTime() > new Date(this.list.ended_at).getTime()) {
      return '!!已结束!!  ';
    } else if (
      new Date(this.list.started_at).getTime() < new Date().getTime() &&
      new Date().getTime() < new Date(this.list.ended_at).getTime()) {
      this.diff = Math.abs(new Date(this.list.ended_at).getTime() - new Date().getTime());
      this.diffDays = Math.ceil(this.diff / (1000 * 3600 * 24));
      return this.diffDays;
    }
  }

  score_stars(number) {
    this.comment.rating = number;
    this.user_stars = [];
    for (let i = 0; i < 5; i++) {
      this.user_stars.push(i < number);
    }
    return 1;
  }

  show_stars(comment: Comment) {
    this.comment_stars = [];
    for (let i = 0; i < 5; i++) {
      this.comment_stars.push(i < comment.rating);
    }
    comment.stars = this.comment_stars;
    return 1;
  }
  // deadline: number = Date(this.list.updatedAt);
  constructor(
    private commoditiesService: CommoditiesService,
    private cartsservice: CartsService,
     private projectservic: ProjectService,
     private route: ActivatedRoute,
     private authService: AuthService) {}
  ngOnInit() {
    scroll(0, 0);
    this.route.params.subscribe(data => {
      this.comment.project_id = data.id;
      this.feedback.project_id = data.id;
      const id = data.id;
      this.projectservic.getProject(id).subscribe((project: Project) => {
        this.list = project;
        this.percentage = Number(this.list.curr_amount / this.list.goal_amount * 100).toFixed(2);
        // this.feedback = JSON.parse(this.list.feedback);
        console.log(this.list);
      });
    });
    this.cartsservice.getUserAllInfo();
    this.followingProjects = this.cartsservice.followingProjectlist;
  }

  createComment() {
    if (this.authService.isLogin()) {
      this.authService.createComment(this.comment);
      window.location.reload();
    } else {
      alert('請先登入');
    }
  }

  orderFeedback(event) {
    if (this.authService.isLogin()) {
      if (confirm('確定加入購物車?')) {
        this.tempPro = this.list;
        this.tempPro.feedbackid = event.id;
        this.tempPro.feedbackdes = event.description;
        this.tempPro.feedbackprice = event.price;
        console.log(this.tempPro);
        this.followingProjects.push(this.tempPro);
        console.log(this.followingProjects);
        this.followingProjectsInfo = JSON.stringify(this.followingProjects);
        localStorage.setItem('data', this.followingProjectsInfo);

        // this.feedback.feedback_id = event.id;
        // console.log(this.feedback);
        // this.authService.orderFeedback(this.feedback);
      }
    } else {
      alert('請先登入');
    }
  }
}
