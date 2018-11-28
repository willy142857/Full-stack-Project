import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';
import { ProjectPlus } from 'src/app/project/project';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalmoney;
  projectlist: ProjectPlus[];
  constructor(private cartsservice: CartsService) {
    this.cartsservice.getUserAllInfo();
  }

  // get projectlist() {
  //   console.log(this.cartsservice.followingProjectlist);
  //   return this.cartsservice.followingProjectlist;
  // }

  ngOnInit() {
    scroll(0, 0);
    this.projectlist = this.cartsservice.followingProjectlist;
    this.totalmoney = this.cartsservice.totalmoney;
    console.log(this.projectlist);
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
