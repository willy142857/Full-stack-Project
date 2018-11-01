import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrievepassword',
  templateUrl: './retrievepassword.component.html',
  styleUrls: ['./retrievepassword.component.css']
})
export class RetrievepasswordComponent implements OnInit {
  email = '';

  constructor() {}

  ngOnInit() {
    scroll(0, 0);
  }

  onSubmit(form, userMail) {
  }
}
