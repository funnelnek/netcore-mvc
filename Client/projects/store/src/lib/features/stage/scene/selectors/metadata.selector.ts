import { createSelector } from '@ngrx/store';
import { SceneContext } from "../../types";


export const selectSceneMetadata = (scene: SceneContext) => scene.metadata;
export const getSceneMetadata = createSelector(selectSceneMetadata, metadata => metadata);