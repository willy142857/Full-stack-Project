import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project/project.service';
import {
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/animations';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('carousel', [
      state(
        'stay',
        style({
          marginLeft: '0vw'
        })
      ),
      state(
        'stayR',
        style({
          marginLeft: '0vw'
        })
      ),
      state(
        'moveLeft',
        style({
          marginLeft: '0vw'
        })
      ),
      state(
        'moveRight',
        style({
          marginLeft: '0vw'
        })
      ),
      transition(
        '* => moveLeft',
        animate(
          '500ms ease-in-out',
          style({
            marginLeft: '-180vw'
          })
        )
      ),
      transition(
        '* => stay',
        animate(
          '500ms ease-in-out',
          style({
            marginLeft: '-180vw'
          })
        )
      ),
      transition(
        '* => moveRight',
        animate(
          '500ms ease-in-out',
          style({
            marginLeft: '180vw'
          })
        )
      )
    ])
  ]
})
export class BannerComponent implements OnInit {
  projects = [
    {
      img: 'assets/images/carBanner.jpg',
      name: '1124',
      date: '8'
    },
    {
      img: 'assets/images/slider-temp2.jpg',
      name: '滅東廠',
      date: '7'
    }
  ];

  selected = [
    {
      img: 'assets/images/angel.jpg',
      name: '計畫名稱',
      date: '18'
    }
  ];
  constructor(private projectService: ProjectService) {}

  state = 'stay';
  timer: any;

  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
  }

  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.selected.push(this.projects[0]);
      this.projects.push(this.selected[0]);
      this.selected.shift();
      this.projects.shift();
    } else if (this.state === 'moveRight') {
      const last = this.projects.length - 1;
      this.selected.unshift(this.projects[last]);
      this.projects.unshift( this.selected[1]);
      this.selected.pop();
      this.projects.pop();
      this.state = 'stayR';
    }
    console.log(this.selected);
    console.log(this.state);
  }

  stopPlay(): void {
    clearInterval(this.timer);
  }

  playNext(): void {
    this.state = this.state === 'stay' ? 'moveLeft' : 'stay';
  }

  playPre(): void {
    this.state = 'moveRight';
  }

  ngOnInit() {
    this.autoPlay();
  }

  leftDay(project) {
    // this.projectService.calcLeftDay(project);
  }
}
