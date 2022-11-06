import { ShoppingCartState } from './../../../../../../core/src/lib/models/shopping-cart/types/shopping-cart-state.type';
import { ActionPayload } from '../../../contracts/ActionPayload';
import { IProduct } from '@client/core';



export const onAddToCart = (cart: ShoppingCartState, { payload }: ActionPayload<IProduct>) => 
{
  let state: ShoppingCartState = {
    ...cart,
    items: [...cart.items, payload]
  }

  return state;
}