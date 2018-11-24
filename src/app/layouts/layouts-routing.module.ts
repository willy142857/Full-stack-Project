import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QAComponent } from './qa/qa.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  {
    path: 'qa',
    component: QAComponent
  },
  {
    path: 'termsOfUse',
    component: TermsOfUseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
