import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaneComponent } from './pane.component';



@NgModule({
  declarations: [
    PaneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaneComponent
  ]
})
export class PaneModule { }
