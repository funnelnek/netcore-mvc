import { createSelector } from "@ngrx/store";
import { getStage } from "../../selectors";
import { StageContext } from "../../types";


export const selectStageLoader = (stage: StageContext) => stage.loader;
export const getStageLoader = createSelector(
    getStage,
    selectStageLoader
);