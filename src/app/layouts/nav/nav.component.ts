import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common' ;
import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/app/cart/carts.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private location: Location,
    private route: ActivatedRoute,
    private cartsservice: CartsService,
    ) { }
  pathUrl;
  routeUrl;
  current = {
    'current-page-item': false,
  };
  get projectlist() {
    this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }
  get count() {
    return this.projectlist.length;
  }

  ngOnInit() {
    scroll(0, 0);
    this.checkLogin();
    this.check();
  }
  check() {
    this.pathUrl = this.location.path(); // 獲取當前url的子路徑(也就是當前url#後面的内容,不包括参數)
    this.routeUrl = this.route.url;
    if (this.pathUrl.indexOf('projects') !== -1) {
      this.pathUrl = '/projects';
    } else if (this.pathUrl.indexOf('create') !== -1) {
      this.pathUrl = '/create';
    }
    console.log(this.routeUrl);
    console.log(this.pathUrl);
  }

  get isLogin() {
    return this.authService.isLogin();
  }

  checkLogin() {
    if (this.authService.isLogin()) {
      this.cartsservice.getUserAllInfo();
    }
  }
}
