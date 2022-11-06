import { Administrator, Authenication } from "@client/core";
import { ActionPayload } from '../../../../types';
import { AuthenicationActionHandler } from "./authenication.handler";


export const onLoginSuccess = (authenication: AuthenicationActionHandler) => (_: Authenication, { payload }: ActionPayload<Administrator>): Authenication => {
    return authenication.success(payload);
}