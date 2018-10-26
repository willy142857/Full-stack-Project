import { CommoditiesService } from './commodities.service';
import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  today = new Date();
  items = [];
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
      console.log(event);
    }
  }

  // deadline: number = Date(this.list.updatedAt);
  constructor(private commoditiesService: CommoditiesService) {}
  ngOnInit() {}
}
