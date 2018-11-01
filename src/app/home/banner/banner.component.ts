import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  items = [
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '滅東廠',
      date: '7'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
