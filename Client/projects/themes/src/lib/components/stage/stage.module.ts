import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageRoutingModule } from './stage-routing.module';
import { StageComponent } from './stage.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StageRoutingModule
  ],
  exports: [
    StageComponent
  ]
})
export class StageModule { }
