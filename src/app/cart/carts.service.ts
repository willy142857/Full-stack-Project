import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../member/member';
import { Router } from '@angular/router';
import { Project } from 'src/app/project/project';

@Injectable({
  providedIn: 'root'
})

export class CartsService {
  constructor(private httpClient: HttpClient, private router: Router) {
    this.totalCharge();
  }

  totalmoney;
  followingProjectlist = [];
  user: Member;
  projects: Project[];

  // tslint:disable-next-line:use-life-cycle-interface
  getFollowingProjects() {
    this.httpClient
      .get(`${environment.api}/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .subscribe(
        (data: Member) => {
          console.log(data);
          this.user = data;

          this.httpClient
            .get(`${environment.api}/profile/projects`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            })
            .subscribe((message: Project[]) => {
              this.projects = message;
              this.followingProjectlist = message;
              console.log(message);
            });
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
            this.router.navigate(['/login']);
          }
        }
      );
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
    if (this.followingProjectlist[index].count > 1) {
      this.followingProjectlist[index].count--;
    }
    this.totalCharge();
  }

  buttomClickPlus(index) {
    this.followingProjectlist[index].count++;
    this.totalCharge();
  }
  totalCharge() {
    this.totalmoney = 0;
    for (let index = 0; index < this.followingProjectlist.length; index++) {
      this.totalmoney = this.totalmoney + this.followingProjectlist[index].price;
    }
  }
}
