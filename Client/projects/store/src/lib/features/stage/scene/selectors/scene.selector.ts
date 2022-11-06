import { createSelector } from "@ngrx/store";
import { StageContext } from '../../types';


export const selectScene = (stage: StageContext) => stage.scene;
export const getScene = createSelector(selectScene, scene => scene);