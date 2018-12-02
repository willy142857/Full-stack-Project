import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectModule } from '../project/project.module';
@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, ProjectModule],
  declarations: [BannerComponent, HomeComponent, TrendingComponent]
})
export class HomeModule {}
