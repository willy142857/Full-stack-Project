import { Component, OnInit } from '@angular/core';
import { CartsService } from '../cart/carts.service';
import { Router } from '@angular/router';
import { ProjectPlus } from 'src/app/project/project';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  projectlist: ProjectPlus[];
  totalmoney;
  constructor(private cartsservice: CartsService, private router: Router) {
    this.cartsservice.getUserAllInfo();
  }

  // get list() {
  //   return this.cartsservice.followingProjectlist;
  // }

  ngOnInit() {
    scroll(0, 0);
    this.projectlist = this.cartsservice.followingProjectlist;
    this.totalmoney = this.cartsservice.totalmoney;
  }

  checkout() {
    if (confirm('確定加入購物車?')) {
      this.router.navigate(['/']);
    }
  }

}
