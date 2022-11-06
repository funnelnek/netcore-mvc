import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { AppBarComponent } from './appbar.component';
import { BrandingModule } from '../branding/branding.module';


@NgModule({
  declarations: [
    AppBarComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    BrandingModule
  ],
  exports: [
    AppBarComponent
  ]
})
export class AppBarModule { }
