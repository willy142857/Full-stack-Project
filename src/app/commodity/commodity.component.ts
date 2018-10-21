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
  get list() {
    console.log(this.today);
    return this.commoditiesService.commodity;
  }
  // deadline: number = Date(this.list.updatedAt);
  constructor(private commoditiesService: CommoditiesService) { }
  ngOnInit() {
  }

}
