import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/images/logo.png';
  langs = this.translateService.getLangs();
  currLang = this.translateService.currentLang;

  constructor(
    private authService: AuthService,
    private translateService: TranslateService,
    private router: Router
  ) {}

  changeLang(lang: string) {
    this.translateService.use(lang).subscribe(data => {});
  }
  get isLogin() {
    return this.authService.isLogin();
  }
  ngOnInit() {
    scroll(0, 0);
    console.log(this.langs);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currLang = this.translateService.currentLang;
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
