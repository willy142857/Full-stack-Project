import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  shop = '商店';
  accessory = '飾品';
  page = '分頁';
  blog = '部落格';
  art = '藝術';
  story = '故事牆';
  shareStory = '分享你的故事';
  explore = '探索';
  total = '所有計畫';
  final = '最後衝刺';
  new = '最新啟動';
  proposal = '提案';
  shorttime = '一次性集資';
  longtime = '訂閱式專案';

  constructor() {}

  ngOnInit() {}
}
