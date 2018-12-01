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
  constructor(private cartsservice: CartsService, private router: Router) {
    this.cartsservice.getUserAllInfo();
  }

  get projectlist() {
    // this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }

  ngOnInit() {
    scroll(0, 0);
  }

  checkout() {
    if (confirm('確定加入購物車?')) {
      this.router.navigate(['/']);
    }
  }

}
