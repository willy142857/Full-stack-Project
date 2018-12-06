import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

  langs = this.translateService.getLangs();
  currLang = this.translateService.currentLang;

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    scroll(0, 0);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem('lang', this.translateService.currentLang);
      this.currLang = this.translateService.currentLang;
    });
  }
}
