import { TooltipModule } from './../tooltip/tooltip.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarPipe } from './pipes/avatar.pipe';



@NgModule({
  declarations: [
    AvatarComponent,
    AvatarPipe
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    AvatarComponent,
    AvatarPipe
  ]
})
export class AvatarModule { }
