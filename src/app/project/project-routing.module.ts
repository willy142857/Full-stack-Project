import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { IndexComponent } from './index/index.component';
import { CommodityComponent } from './commodity/commodity.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: ':id',
        component: CommodityComponent,
      },
      {
        path: 'search',
        children: [
          {
            path: 'categories/:id',
            component: IndexComponent,
          },
          {
            path: ':keyword',
            component: IndexComponent,
          },
        ]
      }
    ]
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
