import { Authorization } from "@client/core";
import { ActionReducer, createReducer } from "@ngrx/store";
import { ActionPayload } from "projects/store/src/lib/contracts";
import { AuthorizationInitialState } from "../authorization.state";
import { AuthorizationService } from "../services/authorization.service";
import { AuthorizationActionHandler } from "./authorization.handler";


export const AuthorizationStoreReducer = (service: AuthorizationService): ActionReducer<Authorization, ActionPayload> => {
    const handler = new AuthorizationActionHandler(service);

    const AuthorizationStore: ActionReducer<Authorization, ActionPayload> = createReducer(AuthorizationInitialState);

    return AuthorizationStore;
}