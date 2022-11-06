import { IProduct } from '@client/core';
import { ADD_TO_CART } from './constants/add-to-cart.constant';
import { createAction, props } from '@ngrx/store';
import { Payload } from '../../../contracts/Payload';


export const addToCart = createAction(ADD_TO_CART, props<Payload<IProduct>>());