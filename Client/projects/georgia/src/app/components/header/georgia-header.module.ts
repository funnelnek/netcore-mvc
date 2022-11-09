import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeorgiaHeaderComponent } from './georgia-header.component';
import { BrandingModule } from '../branding/branding.module';
import { HeaderBannerModule } from './header-banner/header-banner.module';


@NgModule({
  declarations: [
    GeorgiaHeaderComponent
  ],
  imports: [
    CommonModule,
    BrandingModule,
    HeaderBannerModule
  ],
  exports: [
    GeorgiaHeaderComponent
  ]
})
export class GeorgiaHeaderModule { }
