import { RatingModule } from './../../rating/rating.module';
import { ProductCardComponent } from './product.component';
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [ProductCardComponent],
  imports: [RatingModule],
  exports: [ProductCardComponent]
})
export class ProductCardModule {}