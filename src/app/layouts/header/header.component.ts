import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { SearchService } from 'src/app/core/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/images/logo.png';
  langs = this.translateService.getLangs();
  currLang = this.translateService.currentLang;
  searchWord;
  constructor(
    private authService: AuthService,
    private translateService: TranslateService,
    private router: Router,
    public searchService: SearchService,
  ) { }

  changeLang(lang: string) {
    this.translateService.use(lang).subscribe(data => {});
  }
  get isLogin() {
    return this.authService.isLogin();
  }
  ngOnInit() {
    scroll(0, 0);
    // console.log(this.langs);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currLang = this.translateService.currentLang;
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  enter(event: KeyboardEvent) {
    if ( event.keyCode === 13 ) {
      this.searchService.searchData.keyword = this.searchWord;
      console.log(this.searchService.searchData.keyword);

      this.searchService.search(this.searchService.searchData.keyword);
      this.router.navigate(['/projects/search', this.searchWord]);
      this.searchWord = '';
    }
  }
}
