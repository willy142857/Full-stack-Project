import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project/project.service';
import {
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { Project } from 'src/app/project/project';

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
  projects: Project[];

  selected: Project[] = [];
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
      this.projects.unshift(this.selected[1]);
      this.selected.pop();
      this.projects.pop();
      this.state = 'stayR';
    }
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
    this.projectService
      .getRecentProjects()
      .subscribe((recentProjects: Project[]) => {
        this.projects = recentProjects;
        this.selected.push(this.projects[0]);
        this.projects.shift();
        for (let i = 0; i < 4; i++) {
          if (this.projects[i].name.length >= 15) {
            console.log(this.projects[i].name);
            this.projects[i].name = this.projects[i].name.slice(0, 14) + '．．．';
            console.log(this.projects[i].name);
          }
        }
        if (this.selected[0].name.length >= 15) {
          this.selected[0].name = this.selected[0].name.slice(0, 14) + '．．．';
        }
      });

    this.autoPlay();
  }

  leftDay() {
    return this.projectService.calcLeftDay(this.selected[0]);
  }
}
