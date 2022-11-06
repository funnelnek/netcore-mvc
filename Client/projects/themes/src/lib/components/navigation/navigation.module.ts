import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    NavigationComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ],
  exports: [
    NavigationComponent,
    NavLinkComponent
  ]
})
export class NavigationModule { }
