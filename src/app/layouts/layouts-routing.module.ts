import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QAComponent } from './qa/qa.component';

const routes: Routes = [
  {
    path: 'qa',
    component: QAComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
