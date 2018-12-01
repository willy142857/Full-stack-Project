import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common' ;
import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/app/cart/carts.service';
import { ProjectPlus } from 'src/app/project/project';
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
  totalmoney;
  projectlist: ProjectPlus[];
  ngOnInit() {
    scroll(0, 0);
  }

  get isLogin() {
    return this.authService.isLogin();
  }

  checkLogin() {
    if (this.authService.isLogin()) {
      this.cartsservice.getUserAllInfo();
      this.projectlist = this.cartsservice.followingProjectlist;
      this.totalmoney = this.cartsservice.totalmoney;
    }
  }
}
