import { ValidationErrors } from "@angular/forms";
import { Authenication } from "@client/core";
import { ActionPayload } from '../../../../types';
import { AuthenicationActionHandler } from "./authenication.handler";


export const onLoginFailed = (authenication: AuthenicationActionHandler) => (state: Authenication, { payload }: ActionPayload<ValidationErrors>): Authenication => {
    return authenication.failed(payload, state);
}