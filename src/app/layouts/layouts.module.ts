import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutsRoutingModule } from './layouts-routing.module';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { QAComponent } from './qa/qa.component';

@NgModule({
  imports: [CommonModule, SharedModule, LayoutsRoutingModule],
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    QAComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class LayoutsModule {}
