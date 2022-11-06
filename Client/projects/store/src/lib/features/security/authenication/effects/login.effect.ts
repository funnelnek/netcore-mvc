import { ValidationErrors } from "@angular/forms";
import { Administrator, LoginCredential } from "@client/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, exhaustMap, catchError, of } from "rxjs";
import { login, loginFailed, loginSuccess } from "../actions";
import { AuthenicationService } from "../services/authenication.service";
import { Payload } from "../../../../contracts";


export const authenicate = (actions: Actions, auth: AuthenicationService) => createEffect(() => actions.pipe(
    ofType(login),
    exhaustMap(({ payload }: Payload<LoginCredential>) => auth.authenicate(payload)
        .pipe(
            map(res => res.id ? loginSuccess({ payload: res as Administrator}) : loginFailed({ payload: res as ValidationErrors })),
            catchError(error => of(loginFailed(error)))
        ),
    ),
));