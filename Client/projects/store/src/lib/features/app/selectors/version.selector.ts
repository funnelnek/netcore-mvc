import { Application } from "@client/core";
import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../types/application-state.type";



const version = (version: string) => version;
export const selectAppVersionFromStore = (store: Application) => store.app.version;
export const selectAppVersion = (app: ApplicationState) => app.version;
export const getAppVersion = createSelector(selectAppVersion, version);
export const getStoreAppVersion = createSelector(selectAppVersionFromStore, version);