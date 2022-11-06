import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminToolbarComponent } from './admin-toolbar.component';
import { ToolbarModule } from '../../../components/toolbar/toolbar.module';


@NgModule({
  declarations: [
    AdminToolbarComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports: [
    AdminToolbarComponent
  ]
})
export class AdminToolbarModule { }
