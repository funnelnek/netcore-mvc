import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BrandingModule } from '../branding/branding.module';
import { BannerModule } from '../banner/banner.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrandingModule,
    BannerModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
