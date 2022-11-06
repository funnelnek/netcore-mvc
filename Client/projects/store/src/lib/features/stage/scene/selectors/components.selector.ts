import { createSelector } from '@ngrx/store';
import { SceneContext } from "../../../types";


export const selectSceneComponents = (scene: SceneContext) => scene.components;
export const getSceneComponents = createSelector(selectSceneComponents, components => components);