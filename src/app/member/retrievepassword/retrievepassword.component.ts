import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-retrievepassword',
  templateUrl: './retrievepassword.component.html',
  styleUrls: ['./retrievepassword.component.css']
})
export class RetrievepasswordComponent implements OnInit {
  email = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    scroll(0, 0);
  }

  onSubmit(form, userMail) {
  }
}
