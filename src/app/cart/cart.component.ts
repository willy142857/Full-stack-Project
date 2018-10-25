import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalmoney = 0;
  constructor(private cartsservice: CartsService) {
    this.totalCharge();
  }

  get list() {
    return this.cartsservice.list;
  }

  get coupon() {
    return this.cartsservice.coupon;
  }

  ngOnInit() {
  }

  buttomClickMinus(index) {
    if (this.list[index].count > 0) {
      this.list[index].count--;
    }
    this.totalCharge();
  }

  buttomClickPlus(index) {
    this.list[index].count++;
    this.totalCharge();
  }

  totalCharge() {
    this.totalmoney = 0;
    for (let index = 0; index < this.list.length; index++) {
      this.totalmoney = this.totalmoney + this.list[index].count * this.list[index].price;
    }
  }

}
