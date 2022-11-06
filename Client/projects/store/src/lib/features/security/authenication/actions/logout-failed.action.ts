import { ValidationErrors } from "@angular/forms";
import { createAction, props } from "@ngrx/store";
import { Payload } from "../../../../contracts";
import { AUTHENICATION_LOGOUT_FAILED } from "../constants";


export const logoutFailed = createAction(AUTHENICATION_LOGOUT_FAILED, props<Payload<ValidationErrors>>());