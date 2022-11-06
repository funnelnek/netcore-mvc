import { ValidationErrors } from "@angular/forms";
import { Authenication } from "@client/core";
import { ActionPayload } from "../../../../contracts/ActionPayload";
import { AuthenicationActionHandler } from "./authenication.handler";


export const onLogoutFailed = (authenication: AuthenicationActionHandler) =>  (state: Authenication, { payload }: ActionPayload<ValidationErrors>): Authenication => {
    return authenication.logoutFailed(payload, state);
}