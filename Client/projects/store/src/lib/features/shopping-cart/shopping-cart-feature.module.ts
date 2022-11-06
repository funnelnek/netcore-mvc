import { ShoppingCartFeatureKey } from './constants/shopping-cart-feature-key.constant';
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { ShoppingCartStateManager } from './shopping-cart.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature(ShoppingCartFeatureKey, ShoppingCartStateManager)
  ],
  providers: [ShoppingCartService]
})
export class ShoppingCartStoreModule {}