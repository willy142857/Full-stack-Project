import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {};
  category = this.projectService.category;
  nowDate = new Date();
  constructor(private projectService: ProjectService, private router: Router) {}
  ngOnInit() {
    scroll(0, 0);
  }
  onSubmit(form) {
    this.projectService.set();
    this.router.navigateByUrl('/');
    console.log(form.value);
  }
}
