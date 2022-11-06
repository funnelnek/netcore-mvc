import { Authenication } from "@client/core";
import { AuthenicationActionHandler } from "./authenication.handler";


export const onLogoutSuccess = (authenication: AuthenicationActionHandler) => (state: Authenication): Authenication => {
    return authenication.loggedOut(state);
}