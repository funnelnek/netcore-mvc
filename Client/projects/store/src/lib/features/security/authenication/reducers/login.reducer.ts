import { Authenication, LoginCredential } from "@client/core";
import { ActionPayload } from "../../../../contracts/ActionPayload";
import { AuthenicationActionHandler } from "./authenication.handler";


export const onLogin = (authenication: AuthenicationActionHandler) => (state: Authenication, { payload }: ActionPayload<LoginCredential>): Authenication => {
    return authenication.login(payload, state);
};