import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';
import { RouterModule } from '@angular/router';
import { AdminBarModule } from '../admin-bar/admin-bar.module';
import { AdminToolbarModule } from '../admin-toolbar/admin-toolbar.module';



@NgModule({
  declarations: [
    AppShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppShellRoutingModule,
    AdminBarModule,
    AdminToolbarModule
  ],
  exports: [
    AppShellComponent
  ]
})
export class AppShellModule { }
