import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  tests = [
    {
      img: 'assets/images/slider-temp.jpg',
      name: '六柳計畫',
      date: '18',
      brief: '種樹',
      founder: '五柳先生',
      currPrice: '1300',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '大同',
      date: '8',
      brief:
        '大道之行也，天下為公，選賢與能，講信修睦，故人不獨親其親，\
        不獨子其子，使老有所終，壯有所用，幼有所長，鰥寡孤獨廢疾者皆有所養；\
        男有分，女有歸，貨惡其棄於地也不必藏於己，力惡其不出於身也不必為己，\
        是故謀閉而不興，盜竊亂賊而不作，故外戶而不閉，是謂大同。',
      founder: '禮記',
      currPrice: '140',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: 'QQQ',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '100',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '2600',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '1390',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: 'HHH',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '8000',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '8700',
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
      name: 'GGG',
      date: '7',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '900',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '10',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '18',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '4970',
      targetPrice: '8700'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: 'DDD',
      date: '71',
      brief: '簡介計畫',
      founder: '提案人',
      currPrice: '3680',
      targetPrice: '8700'
    }
  ];
  dasharray = 350;

  constructor() {}

  ngOnInit() {}

  progress(item): number {
    return (
      this.dasharray - (item.currPrice / item.targetPrice) * this.dasharray
    );
  }
}
