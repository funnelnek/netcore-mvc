import { createAction } from "@ngrx/store";
import { AUTHENICATION_LOGOUT_SUCCESS } from "../constants";


export const logoutSuccess = createAction(AUTHENICATION_LOGOUT_SUCCESS);