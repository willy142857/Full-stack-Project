import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [IndexComponent, CreateComponent, EditComponent],
  exports: [IndexComponent, CreateComponent, EditComponent]
})
export class ProductModule {}
