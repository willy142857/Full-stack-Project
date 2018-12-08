import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtModule } from '@auth0/angular-jwt';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { MemberModule } from './member/member.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [environment.domain],
        blacklistedRoutes: [`${environment.domain}/auth/`],
        skipWhenExpired: true,
      }
    }),
    SharedModule,
    LayoutsModule,
    HomeModule,
    ProjectModule,
    MemberModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
