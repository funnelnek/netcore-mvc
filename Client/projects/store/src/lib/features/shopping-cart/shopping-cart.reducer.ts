import { addToCart, removeFromCart } from './actions';
import { ShoppingCartInitialState } from './shopping-cart.state';
import { createReducer, on } from '@ngrx/store';
import { onAddToCart, onRemoveFromCart } from './reducers';


export const ShoppingCartStateManager = createReducer(
  ShoppingCartInitialState,
  on(addToCart, onAddToCart),
  on(removeFromCart, onRemoveFromCart)
);