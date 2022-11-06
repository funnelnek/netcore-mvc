import { Security } from "@client/core";
import { ActionReducerFactory, ActionReducerMap, combineReducers, ActionReducer } from "@ngrx/store";
import { InitialState } from "@ngrx/store/src/models";
import { ActionPayload } from "../../../contracts";
import { AuthenicationService } from "../authenication/services/authenication.service";
import { AuthorizationService } from "../authorization/services/authorization.service";


export type SecurityStoreReducerFactoryOptions = {
    authenication: AuthenicationService,
    authorization: AuthorizationService
}

export const SecurityStoreReducerFactory: ActionReducerFactory<Security, ActionPayload> = (
        reducers: ActionReducerMap<Security, ActionPayload>, 
        initialState: InitialState<Security>
    ): ActionReducer<Security, ActionPayload> => {
        return combineReducers(reducers, initialState as Partial<Security> | undefined);
}