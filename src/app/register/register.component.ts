import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  model: any = {};
  ngOnInit() {}
  onSubmit(form) {
    console.log(this.model);
  }
}
