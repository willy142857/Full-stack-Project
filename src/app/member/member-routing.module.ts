import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetrievepasswordComponent } from './retrievepassword/retrievepassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { RaisedProjectComponent } from './raised-project/raised-project.component';
import { EditComponent } from './raised-project/edit/edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resetPassword',
    component: ResetpasswordComponent
  },
  {
    path: 'retrievePassword',
    component: RetrievepasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'raised',
    component: RaisedProjectComponent
  },
  {
    path: 'raisedEdit/:id',
    component: EditComponent
  },
  {
    path: 'profile/:id',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
