import { ValidationErrors } from '@angular/forms';
import { createAction, props } from '@ngrx/store';
import { Payload } from '../../../../contracts';
import { AUTHENICATION_LOGIN_FAILED } from '../constants/authenication-actions.constant';



export const loginFailed = createAction(AUTHENICATION_LOGIN_FAILED, props<Payload<ValidationErrors>>())