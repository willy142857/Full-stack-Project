import { CartsService } from './../cart/carts.service';
import { CommoditiesService } from './commodities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  today = new Date();
  stars: any = [false, false, false, false, false];
  new_commodity: any;
  get list() {
    return this.commoditiesService.commodity;
  }

  get messages() {
    return this.commoditiesService.messages;
  }
  diff: number;
  diffDays: number;
  date() {
    if (new Date().getTime() < new Date(this.list.startAt).getTime()) {
      return '未开始';
    } else if (new Date().getTime() > new Date(this.list.endAt).getTime()) {
      return '已结束';
    } else if (
      new Date(this.list.startAt).getTime() < new Date().getTime() &&
      new Date().getTime() < new Date(this.list.endAt).getTime()) {
      this.diff = Math.abs(new Date(this.list.endAt).getTime() - new Date().getTime());
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
  score_stars(number) {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i < number);
    }
  }
  // deadline: number = Date(this.list.updatedAt);
  constructor(private commoditiesService: CommoditiesService,
    private cartsservice: CartsService) {}
  ngOnInit() {
    scroll(0, 0);
  }
}
