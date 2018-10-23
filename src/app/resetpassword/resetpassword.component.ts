import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  newPassword = '';
  newPasswordConfirm = '';
  passwordCheck = true;
  passwordEmpty = true;
  constructor() {}

  ngOnInit() {}
  onSubmit(form) {
    if (this.newPassword !== this.newPasswordConfirm) {
      this.passwordCheck = false;
    } else {
      this.passwordCheck = true;
    }
    if (this.newPassword === '' || this.newPasswordConfirm === '') {
      this.passwordEmpty = true;
    } else {
      this.passwordEmpty = false;
    }
    console.log(this.passwordCheck);
  }
}
