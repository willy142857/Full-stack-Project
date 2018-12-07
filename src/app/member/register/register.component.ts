import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private memberService: MemberService,
    private router: Router,
    private authService: AuthService
  ) {}
  model: any = {};
  ngOnInit() {
    scroll(0, 0);
  }
  onSubmit(form) {
    console.log(this.model);

    this.authService.register(this.model);

    // this.router.navigate(['/']);
  }
}
