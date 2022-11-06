import { Security } from "@client/core";
import { MetaReducer, StoreConfig } from "@ngrx/store";
import { ActionPayload } from "../../../contracts";
import { AuthenicationMeta } from "../authenication/meta/authenication.meta";
import { SecurityInitialState } from "../security.state";
import { SecurityStoreReducerFactory } from "./security-reducer-factory.config";


export const SecurityStoreConfig = (): StoreConfig<Security, ActionPayload> => {
    const middlewares: MetaReducer<Security, ActionPayload>[] = [];
    const config = { initialState: SecurityInitialState } as StoreConfig<Security, ActionPayload>;

    config.reducerFactory = SecurityStoreReducerFactory;
    config.metaReducers = middlewares.concat(AuthenicationMeta);

    return config;
}