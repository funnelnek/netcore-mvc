import { Authenication } from "@client/core";
import { AuthenicationActionHandler } from "./authenication.handler";


export const onLogout = (authenication: AuthenicationActionHandler) => (state: Authenication): Authenication => {
    return authenication.logout(state);
}