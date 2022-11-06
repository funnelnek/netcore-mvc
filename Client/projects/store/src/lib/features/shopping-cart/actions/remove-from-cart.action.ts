import { createAction, props } from '@ngrx/store';
import { Payload } from '../../../contracts/Payload';
import { REMOVE_FROM_CART } from './constants/remove-from-cart.constant';


export const removeFromCart = createAction(REMOVE_FROM_CART, props<Payload<string>>());