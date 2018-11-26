import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../member.service';
import { Project, Feedback } from 'src/app/project/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  project: Project;
  feedbacks: Feedback[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.memberService
        .getRaisedProject(id)
        .subscribe((raisedProject: Project) => {
          this.project = raisedProject;
          this.feedbacks = this.project.feedbacks;
          console.log(this.project);
        });
      // this.memberService
      //   .getRaisedProjectFeedback(id)
      //   .subscribe((raisedProjectFeedbacks: Feedback) => {
      //     this.feedbacks = raisedProjectFeedbacks;
      //     //console.log(this.feedbacks);
      //   });
    });
  }
}
