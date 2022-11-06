import { createSelector } from '@ngrx/store';
import { SceneContext } from "../../types";


export const selectSceneScripts = (scene: SceneContext) => scene.scripts;
export const getSceneScripts = createSelector(selectSceneScripts, scripts => scripts);