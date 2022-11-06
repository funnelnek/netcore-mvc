import { AvatarModule } from './../../../components/avatar/avatar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './admin-user.component';
import { MenuModule } from '../../../components/menu/menu.module';
import { ButtonModule } from '../../../components/button/button.module';


@NgModule({
  declarations: [
    AdminUserComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    MenuModule,
    ButtonModule
  ],
  exports: [
    AdminUserComponent
  ]
})
export class AdminUserModule { }
