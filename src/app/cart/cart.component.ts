import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartsservice: CartsService) {
    this.cartsservice.getUserAllInfo();
  }

  get projectlist() {
    console.log('cart get');
    this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }

  ngOnInit() {
    scroll(0, 0);
    console.log(this.projectlist);
  }

  buttomClickMinus(index) {
    this.cartsservice.buttomClickMinus(index);
  }

  buttomClickPlus(index) {
    this.cartsservice.buttomClickPlus(index);
  }
}
