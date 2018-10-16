import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = '登入';
  register = '註冊';
  wishlist = '願望清單';
  checklist = 'checklist';
  logo = 'assets/images/logo.png';
  constructor() {}

  ngOnInit() {}
}
