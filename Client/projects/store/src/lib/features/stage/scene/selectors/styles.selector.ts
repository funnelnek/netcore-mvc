import { createSelector } from '@ngrx/store';
import { SceneContext } from "../../types";


export const selectSceneStyles = (scene: SceneContext) => scene.styles;
export const getSceneStyles = createSelector(selectSceneStyles, styles => styles);





