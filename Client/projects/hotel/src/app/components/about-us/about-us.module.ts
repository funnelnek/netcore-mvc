import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { HeadingModule } from '../heading/heading.module';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HeadingModule
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
