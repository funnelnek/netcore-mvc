import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
