import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBarComponent } from './admin-bar.component';
import { AdminBarHeaderModule } from './admin-bar-header/admin-bar-header.module';
import { PaneModule } from '../../../components/pane/pane.module';
import { AdminUserModule } from '../admin-user/admin-user.module';
import { NavigationModule } from '../../../components/navigation/navigation.module';



@NgModule({
  declarations: [
    AdminBarComponent
  ],
  imports: [
    CommonModule,
    AdminBarHeaderModule,
    AdminUserModule,
    PaneModule,
    NavigationModule
  ],
  exports: [
    AdminBarComponent
  ]
})
export class AdminBarModule { }
