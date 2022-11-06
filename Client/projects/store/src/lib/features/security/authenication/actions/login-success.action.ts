import { Administrator } from '@client/core';
import { createAction, props } from "@ngrx/store";
import { Payload } from '../../../../contracts';
import { AUTHENICATION_LOGIN_SUCCESS } from '../constants';


export const loginSuccess = createAction(AUTHENICATION_LOGIN_SUCCESS, props<Payload<Administrator>>());