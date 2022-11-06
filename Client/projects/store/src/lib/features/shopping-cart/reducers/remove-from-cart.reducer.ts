import { ShoppingCartState } from '@client/core';
import { ActionPayload } from '../../../contracts/ActionPayload';


export const onRemoveFromCart = (cart: ShoppingCartState, { payload }: ActionPayload<string>) => ({ ...cart, items: cart.items.filter(item => item.id !== payload )})