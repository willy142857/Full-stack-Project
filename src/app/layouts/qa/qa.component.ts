import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent implements OnInit {

  constructor() { }
  ask = false;
  ask1 = false;

  questionClick(ask) {
    console.log(ask);
    if (!ask) {
      ask = true;
    } else {
      ask = false;
    }
    console.log(ask);
  }

  ngOnInit() {
    scroll(0, 0);
  }

}
