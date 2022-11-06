import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ButtonModule } from '../button/button.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ListModule } from '../list/list.module';



@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ListModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent
  ]
})
export class MenuModule { }
