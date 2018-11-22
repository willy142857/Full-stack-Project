import { ActivatedRoute } from '@angular/router';
import { Project, Comment} from 'src/app/project/project';
import { ProjectService } from './../project/project.service';
import { CartsService } from './../cart/carts.service';
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
  stars: any = [false, false, false, false, false];
  new_commodity: any;
  list: Project;

  percentage: any;

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

  add_to_cart(event) {
    if (confirm('確定加入購物車?')) {
     this.new_commodity = {
      name: event.name,
      img: 'images/cart_img2.jpg',
      type: event.category,
      price: 100,
      count: 1,
      };
      this.cartsservice.list.push(this.new_commodity);
    }
  }
  score_stars(comment: Comment) {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i < comment.rating);
    }
    return 1;
  }
  // deadline: number = Date(this.list.updatedAt);
  constructor(
    private commoditiesService: CommoditiesService,
    private cartsservice: CartsService,
     private projectservic: ProjectService,
     private route: ActivatedRoute) {}
  ngOnInit() {
    scroll(0, 0);
    this.route.params.subscribe(data => {
      const id = data.id;
      this.projectservic.getProject(id).subscribe((project: Project) => {
        this.list = project;
        this.percentage = Number(this.list.curr_amount / this.list.goal_amount * 100).toFixed(2);
        // this.feedback = JSON.parse(this.list.feedback);
        console.log(this.list);
      });
    });
  }
}
