import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RecaptchaModule, RecaptchaFormsModule],
  declarations: [],
  exports: [FormsModule, TranslateModule, RecaptchaModule, RecaptchaFormsModule],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LfDPn4UAAAAABVwigoMYCJcpZr-tjTl6mrpZqZh' } as RecaptchaSettings,
    },
  ],
})
export class SharedModule {}
