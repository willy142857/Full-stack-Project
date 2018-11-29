import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'projects/index',
    component: IndexComponent,
  },
  {
    path: 'projects/categories/:id',
    component: IndexComponent,
  },
  {
    path: 'projects/search/:keyword',
    component: IndexComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id/edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
