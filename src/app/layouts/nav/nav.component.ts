import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common' ;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private location: Location) {}
  pathUrl = this.location.path(); // 獲取當前url的子路徑(也就是當前url#後面的内容,不包括参數)
  ngOnInit() {
    scroll(0, 0);
    console.log(this.pathUrl);
  }

  getPath() {
    /*if (this.pathUrl !== '/create' && this.pathUrl !== '/project') {

    }*/
  }
  /*getCreate() {
    console.log(this.pathUrl);
    if (this.pathUrl === '/create') {
      '.current-page-item = true';
    }
  }
  getProject() {
    console.log(this.pathUrl);
    if (this.pathUrl === '/project') {

    }
  }*/
}
