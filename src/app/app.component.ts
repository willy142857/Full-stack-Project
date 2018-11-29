import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Full-stack-Project';
  langs = ['zh-tw', 'en'];
  constructor(private translate: TranslateService) {
    translate.addLangs(this.langs);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('zh-tw');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if (localStorage.getItem('lang')) {
      translate.use(localStorage.getItem('lang'));
    } else {
      translate.use('zh-tw');
    }
  }
}
