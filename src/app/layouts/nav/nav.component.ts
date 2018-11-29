import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common' ;
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private location: Location,
    private route: ActivatedRoute
    ) {}
  pathUrl;
  routeUrl;
  current = {
    'current-page-item': false,
  };
  ngOnInit() {
    scroll(0, 0);
    this.check();
  }
  check() {
    this.pathUrl = this.location.path(); // 獲取當前url的子路徑(也就是當前url#後面的内容,不包括参數)
    this.routeUrl = this.route.url;
    if (this.pathUrl.indexOf('projects') !== -1) {
      this.pathUrl = '/projects';
    } else if (this.pathUrl.indexOf('create') !== -1) {
      this.pathUrl = '/create';
    }
    console.log(this.routeUrl);
    console.log(this.pathUrl);
  }
}
