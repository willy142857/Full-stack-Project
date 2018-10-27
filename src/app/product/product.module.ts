import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, SharedModule],
  declarations: [IndexComponent, CreateComponent, EditComponent],
  exports: [IndexComponent, CreateComponent, EditComponent]
})
export class ProductModule {}
