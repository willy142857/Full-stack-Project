import { Component, OnInit } from '@angular/core';
import { CartsService } from '../cart/carts.service';
import { Router } from '@angular/router';
import { ProjectPlus } from 'src/app/project/project';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private cartsservice: CartsService,
              private router: Router,
              private authService: AuthService
              ) {}

  feedback = {
    feedback_id: 1,
    project_id: 1,
    country: '',
    name: '',
    address: '',
    note: '',
  };

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
  }

  checkout() {
    if (confirm('確定贊助這些商品?')) {
      if (this.projectlist != null) {
        for (let index = 0; index < this.projectlist.length; index++) {
          this.feedback.feedback_id = this.projectlist[index].feedbackid;
          this.feedback.project_id = this.projectlist[index].id;
          this.feedback.country = 'Taiwan';
          console.log(this.feedback);
          this.authService.orderFeedback(this.feedback);
        }
        localStorage.removeItem('data');
        this.cartsservice.getUserAllInfo();
        this.router.navigate(['/']);
      } else {
        alert('你沒有贊助任何商品');
      }
    }
  }

}
