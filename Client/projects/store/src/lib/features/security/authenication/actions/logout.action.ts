import { createAction, props } from "@ngrx/store";
import { AUTHENICATION_LOGOUT } from "../constants";
import { Payload } from '../../../../contracts';


export const logout = createAction(AUTHENICATION_LOGOUT, props<Payload<string>>());