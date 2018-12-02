import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProjectRoutingModule } from './project-routing.module';
import { CommodityComponent } from './commodity/commodity.component';
import { UnitComponent } from './unit/unit.component';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
  declarations: [IndexComponent, CreateComponent, EditComponent, CommodityComponent, UnitComponent],
  exports: [IndexComponent, CreateComponent, EditComponent, CommodityComponent, UnitComponent]
})
export class ProjectModule {}
