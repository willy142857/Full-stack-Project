import { Component, OnInit } from '@angular/core';
import { CartsService } from '../cart/carts.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Member } from '../member/member';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private cartsservice: CartsService,
              private router: Router,
              private authService: AuthService,
              private httpClient: HttpClient
              ) {}

  feedback = {
    feedback_id: 1,
    project_id: 1,
    country: 'Taiwan',
    name: '',
    address: '',
    note: '',
  };

  check = false;

  get projectlist() {
    // this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }

  ngOnInit() {
    scroll(0, 0);
    this.cartsservice.getUserAllInfo();
    this.getUserAllInfo();
  }

  getUserAllInfo() {
    this.httpClient
      .get(`${environment.api}/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .subscribe(
        (data: Member) => {
          console.log(data);
          this.feedback.name = data.name;
          this.feedback.address = data.address;
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
            this.router.navigate(['/login']);
          }
        }
      );
  }

  checkout() {
    console.log(this.check);
    if (confirm('確定贊助這些商品?')) {
      if (this.feedback.country === '') {
        alert('plz input country');
      } else if (this.feedback.name === '') {
        alert('plz input your name');
      } else if (this.feedback.address === '') {
        alert('plz input your address');
      } else if (this.check !== true) {
        alert('plz check the contract');
      } else if (this.projectlist != null) {
        for (let index = 0; index < this.projectlist.length; index++) {
          this.feedback.feedback_id = this.projectlist[index].feedbackid;
          this.feedback.project_id = this.projectlist[index].id;
          console.log(this.feedback);
          this.authService.orderFeedback(this.feedback);
        }
        localStorage.removeItem('data');
        this.cartsservice.getUserAllInfo();
        this.router.navigate(['/']);
        alert('謝謝你的支持');
      } else {
        alert('你沒有贊助任何商品');
      }
    }
  }

}
