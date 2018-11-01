import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent implements OnInit {

  constructor() { }
  ask = false;

  questionClick() {
    if (this.ask === false) {
      this.ask = true;
    } else {
      this.ask = false;
    }
  }

  ngOnInit() {
    scroll(0, 0);
  }

}
