import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { CardModule } from '../card/card.module';
import { HeadingModule } from '../heading/heading.module';



@NgModule({
  declarations: [
    RoomsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HeadingModule
  ],
  exports: [
    RoomsComponent
  ]
})
export class RoomsModule { }
