import { LoginCredential } from "@client/core";
import { createAction, props } from "@ngrx/store";
import { AUTHENICATION_LOGIN } from "../constants";
import { Payload } from '../../../../contracts';


export const login = createAction(AUTHENICATION_LOGIN, props<Payload<LoginCredential>>());