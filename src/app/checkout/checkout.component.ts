import { Component, OnInit } from '@angular/core';
import { CartsService } from '../cart/carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalmoney = this.cartsservice.totalmoney;
  constructor(private cartsservice: CartsService, private router: Router) { }

  get list() {
    return this.cartsservice.list;
  }


  ngOnInit() {
    scroll(0, 0);
  }

  checkout() {
    this.router.navigate(['/']);
  }

}
