import { getShoppingCart } from './../selectors/shopping-cart.selector';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Product, ShoppingCartState, Application } from '@client/core';
import { addToCart } from '../actions/add-to-cart.action';
import { removeFromCart } from '../actions/remove-from-cart.action';


@Injectable()
export class ShoppingCartService {
  private _cart$: Observable<ShoppingCartState | null>;

  constructor(
    private store: Store<Application>
  ) {
    this._cart$ = store.select(getShoppingCart);
  }

  async add(product: Product): Promise<void> {
    this.store.dispatch(addToCart({ payload: product }));
  }

  async remove(id: string): Promise<void> {
    this.store.dispatch(removeFromCart({ payload: id }));
  }
}