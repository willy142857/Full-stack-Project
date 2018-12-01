import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/cart/carts.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchCatUrl = 'projects/search/categories';
  constructor(
    private authService: AuthService,
    private cartsservice: CartsService
  ) {}

  get projectlist() {
    // this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }
  get count() {
    if (this.cartsservice.followingProjectlist !== undefined) {
      if (this.cartsservice.followingProjectlist === null) {
        return 0;
      }
      return this.cartsservice.followingProjectlist.length;
    }
  }

  ngOnInit() {
    scroll(0, 0);
    this.checkLogin();
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
