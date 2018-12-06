import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent implements OnInit {

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
