import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  @Input() project: Project;


  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  progress(project: Project): number {
    const ratio = (project.curr_amount / project.goal_amount) * 100;
    return Math.floor(ratio) > 100 ? 100 : Math.floor(ratio);
  }
  // 計算剩餘日期
  leftDay(project: Project): number {
    return this.projectService.calcLeftDay(project);
  }
}

