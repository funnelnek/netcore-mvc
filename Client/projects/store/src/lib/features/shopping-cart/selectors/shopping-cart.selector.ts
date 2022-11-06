import { createSelector } from '@ngrx/store';
import { Application } from '@client/core';


export const selectShoppingCart = (app: Application) => app.cart;
export const getShoppingCart = createSelector(selectShoppingCart, cart => cart);