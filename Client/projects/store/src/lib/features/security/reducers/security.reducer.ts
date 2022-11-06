import { Security } from "@client/core";
import { ActionReducerMap } from "@ngrx/store";
import { ActionPayload } from "../../../contracts";
import { AuthenicationStoreReducer } from "../authenication/reducers/authenication.reducer";
import { AuthenicationService } from "../authenication/services/authenication.service";
import { AuthorizationStoreReducer } from "../authorization/reducers/authorization.reducer";
import { AuthorizationService } from "../authorization/services/authorization.service";


export const SecurityStoreReducer = (
    authenication: AuthenicationService,
    authorization: AuthorizationService
): ActionReducerMap<Security, ActionPayload> => {

    const SecurityStore: ActionReducerMap<Security, ActionPayload> = {
        authenication: AuthenicationStoreReducer(authenication),
        authorization: AuthorizationStoreReducer(authorization)
    };

    return SecurityStore;
};