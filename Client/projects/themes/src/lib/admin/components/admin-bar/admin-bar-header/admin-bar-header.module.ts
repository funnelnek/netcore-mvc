import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBarHeaderComponent } from './admin-bar-header.component';
import { BrandingModule } from '../../../../components/branding/branding.module';
import { ButtonModule } from '../../../../components/button/button.module';



@NgModule({
  declarations: [
    AdminBarHeaderComponent
  ],
  imports: [
    CommonModule,
    BrandingModule,
    ButtonModule
  ],
  exports: [
    AdminBarHeaderComponent
  ]
})
export class AdminBarHeaderModule { }
