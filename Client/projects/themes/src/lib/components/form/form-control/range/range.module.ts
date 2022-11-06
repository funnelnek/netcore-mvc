import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeInputComponent } from './range-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiRangeInputComponent } from './multi-range-input.component';
import { MultiRangeDirective } from './directives/multi-range.directive';



@NgModule({
  declarations: [
    RangeInputComponent,
    MultiRangeInputComponent,
    MultiRangeDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RangeInputComponent,
    MultiRangeInputComponent
  ]
})
export class RangeInputModule { }
