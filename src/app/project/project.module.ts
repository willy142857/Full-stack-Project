import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
  declarations: [IndexComponent, CreateComponent, EditComponent],
  exports: [IndexComponent, CreateComponent, EditComponent]
})
export class ProjectModule {}
