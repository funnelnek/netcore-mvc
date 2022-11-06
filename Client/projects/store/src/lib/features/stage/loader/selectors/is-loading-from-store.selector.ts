import { Application } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectStageLoaderStatusFromStore = (store: Application) => store.stage.loader.isLoading;
export const getStoreStageLoaderStatus = createSelector(
    selectStageLoaderStatusFromStore,
    isLoading => isLoading
);