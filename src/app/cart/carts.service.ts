import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CartsService {
  totalmoney;
  list = [];
  constructor(private httpClient: HttpClient) {
    console.log('getFolloing', this.getFollowingProjects());
    // if (this.getFollowingProjects() != NULL) {
      this.list.push(this.getFollowingProjects());
      this.totalCharge();
    // }
  }
  // list = [
  //   {
  //     name: 'blue denim casual',
  //     img: 'images/cart_img1.jpg',
  //     type: 'shirt',
  //     price: 90,
  //     count: 2,
  //   },
  //   {
  //     name: 'collarlessCoat',
  //     img: 'images/cart_img2.jpg',
  //     type: 'COAT',
  //     price: 80,
  //     count: 2,
  //   },
  //   {
  //     name: 'woolTshirt',
  //     img: 'images/cart_img3.jpg',
  //     type: 'shirt',
  //     price: 110,
  //     count: 2,
  //   },
  //   {
  //     name: 'jeanCoat',
  //     img: 'images/cart_img4.jpg',
  //     type: 'COAT',
  //     price: 70,
  //     count: 2,
  //   }
  // ];

  getFollowingProjects() {
    return this.httpClient.get('http://localhost:8000/api/index');
  }

  buttomClickMinus(index) {
    if (this.list[index].count > 1) {
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
