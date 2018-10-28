import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  model: any = {};
  id: number;
  constructor(
    private project: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.model = this.project.get();
  }
  onSubmit(form) {}
}
