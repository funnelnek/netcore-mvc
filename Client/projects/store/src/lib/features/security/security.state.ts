import { Security } from "@client/core";
import { AuthenicationInitialState } from "./authenication";
import { AuthorizationInitialState } from "./authorization";



export const SecurityInitialState: Security = {
    authenication: AuthenicationInitialState,
    authorization: AuthorizationInitialState
};