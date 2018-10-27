import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RetrievepasswordComponent } from './retrievepassword/retrievepassword.component';

@NgModule({
  imports: [CommonModule, MemberRoutingModule, SharedModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ResetpasswordComponent,
    RetrievepasswordComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ResetpasswordComponent,
    RetrievepasswordComponent
  ]
})
export class MemberModule {}
