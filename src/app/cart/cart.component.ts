import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalmoney;
  constructor(private cartsservice: CartsService) {
    this.cartsservice.totalCharge();
  }

  get list() {
    return this.cartsservice.list;
  }

  ngOnInit() {
  }
  buttomClickMinus(index) {
    this.cartsservice.buttomClickMinus(index);
    this.totalmoney = this.cartsservice.totalmoney;
  }

  buttomClickPlus(index) {
    this.cartsservice.buttomClickPlus(index);
    this.totalmoney = this.cartsservice.totalmoney;
  }
}
