import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProjectRoutingModule } from './project-routing.module';
import { CommodityComponent } from './commodity/commodity.component';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
  declarations: [IndexComponent, CreateComponent, EditComponent, CommodityComponent],
  exports: [IndexComponent, CreateComponent, EditComponent, CommodityComponent]
})
export class ProjectModule {}
