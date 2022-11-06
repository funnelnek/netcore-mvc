import { Application } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectStageLoaderFromStore = (store: Application) => store.stage.loader;
export const getStoreStageLoader = createSelector(
    selectStageLoaderFromStore,
    loader => loader
);