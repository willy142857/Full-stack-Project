import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../member/member';
import { Router } from '@angular/router';
import { Feedback, ProjectPlus } from 'src/app/project/project';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  constructor(private httpClient: HttpClient, private router: Router) {
    this.followingProjectlist = [];
  }

  totalmoney;
  followingProjectlist: ProjectPlus[];
  followingFeedbacklist: Feedback[];
  user: Member;

  tempPro: any;

  getUserAllInfo() {
    this.tempPro = localStorage.getItem('data');
    this.followingProjectlist = JSON.parse(this.tempPro);
    console.log(this.followingProjectlist);
  }

  getUserAllInfoOld() {
    this.httpClient
      .get(`${environment.api}/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .subscribe(
        (data: Member) => {
          console.log(data);
          this.user = data;
          this.followingProjectlist = data.followingProjects;
          this.followingFeedbacklist = data.followingFeedbacks;
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
            this.router.navigate(['/login']);
          }
        }
      );
  }

  initialFollowingProject() {
    if (this.followingProjectlist !== undefined) {
      for (let index = 0; index < this.followingProjectlist.length; index++) {
        this.followingProjectlist[
          index
        ].feedbackprice = this.followingFeedbacklist[index].price;
        this.followingProjectlist[
          index
        ].feedbackdes = this.followingFeedbacklist[index].description;
      }
    }
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

  buttomClickMinus(index) {
    // if (this.followingProjectlist[index].count > 1) {
    //   this.followingProjectlist[index].count--;
    // }
    this.totalCharge();
  }

  buttomClickPlus(index) {
    // this.followingProjectlist[index].count++;
    this.totalCharge();
  }

  totalCharge() {
    if (this.followingProjectlist !== undefined) {
      this.totalmoney = 0;
      if (this.followingProjectlist === null) {
        this.totalmoney = 0;
      } else {
        for (let index = 0; index < this.followingProjectlist.length; index++) {
          this.totalmoney =
            this.totalmoney + this.followingProjectlist[index].feedbackprice;
        }
      }
    }
  }
}
