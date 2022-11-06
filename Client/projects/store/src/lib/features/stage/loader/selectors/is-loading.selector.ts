import { createSelector } from "@ngrx/store";
import { StageLoader } from "../types/stage-loader.type";
import { getStageLoader } from "./loader.selector";


export const selectStageLoaderStatus = (loader: StageLoader) => loader.isLoading;
export const getStageLoaderStatus = createSelector(
    getStageLoader,
    selectStageLoaderStatus
);