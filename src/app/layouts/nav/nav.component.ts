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
  constructor() {}

  ngOnInit() {}
}
