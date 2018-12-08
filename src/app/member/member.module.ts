import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RetrievepasswordComponent } from './retrievepassword/retrievepassword.component';
import { ProjectModule } from '../project/project.module';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [CommonModule, MemberRoutingModule, SharedModule, ProjectModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ResetpasswordComponent,
    RetrievepasswordComponent,
    UserComponent
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
