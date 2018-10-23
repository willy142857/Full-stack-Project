import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './member/login/login.component';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './member/register/register.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { IndexComponent } from './products/index/index.component';
import { CartComponent } from './cart/cart.component';
import { CommodityComponent } from './commodity/commodity.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RetrievepasswordComponent } from './retrievepassword/retrievepassword.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
    LayoutComponent,
    RegisterComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    CartComponent,
    CommodityComponent,
    ResetpasswordComponent,
    RetrievepasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
