import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data = {
    email: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  makeSubscription() {
    console.log(this.data.email);
    this.authService
      .makeSubscription(this.data)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  cancelSubscription() {
    console.log(this.data);
    this.authService
      .cancelSubscription(this.data)
      .subscribe((data: any) => {
        if (data.data.length !== 0) {
          console.log(data);
        } else {
          alert('此信箱未訂閱本網站');
        }

      });
  }
}
