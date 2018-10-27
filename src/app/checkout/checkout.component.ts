import { Component, OnInit } from '@angular/core';
import { CartsService } from '../cart/carts.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalmoney = this.cartsservice.totalmoney;
  constructor(private cartsservice: CartsService) { }

  get list() {
    return this.cartsservice.list;
  }


  ngOnInit() {
  }

}
