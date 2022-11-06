import { Authenication, Security } from "@client/core";
import { ActionReducer, MetaReducer } from "@ngrx/store";
import { ActionPayload } from "projects/store/src/lib/contracts";
import { AUTHENICATION_LOGIN } from "../constants";
import { encryptCredential } from "../utils";

export const loginMiddleware: MetaReducer<Security, ActionPayload> = (next: ActionReducer<Security, ActionPayload>) => (state: Security | undefined, { type, payload }: ActionPayload) => {
    if (type === AUTHENICATION_LOGIN) {
        payload = encryptCredential(payload);

        return next(state, { type, payload });
    }

    return next(state, { type, payload });
}