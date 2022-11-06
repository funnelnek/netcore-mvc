import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';



@NgModule({
  declarations: [
    StarRatingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingsComponent
  ]
})
export class RatingModule { }
