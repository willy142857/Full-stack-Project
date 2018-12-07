import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartsservice: CartsService) {}

  toggle = true;

  get projectlist() {
    // this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }

  changePicState(i: number) {
    if (this.toggle === true) {
      this.toggle = false;
    } else if (this.toggle === false) {
      this.toggle = true;
    }
  }

  ngOnInit() {
    scroll(0, 0);
    this.cartsservice.getUserAllInfo();
  }

  buttomClickMinus(index) {
    this.cartsservice.buttomClickMinus(index);
  }

  buttomClickPlus(index) {
    this.cartsservice.buttomClickPlus(index);
  }

  delete(index) {
    if (confirm('你確定要移除 ' + this.projectlist[index].name)) {
      this.cartsservice.deleteOneProject(index);
    }
  }
}
