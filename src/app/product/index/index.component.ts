import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
  tests = [
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '50',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '滅東廠',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '滅東廠',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '滅東廠',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '滅東廠',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1300',
      targetPrice: '8700'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
