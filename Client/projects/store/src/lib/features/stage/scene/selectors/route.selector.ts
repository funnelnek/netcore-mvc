import { createSelector } from "@ngrx/store";
import { SceneContext } from "../../types/scene-context.type";


export const selectSceneRoute = (scene: SceneContext) => scene.route;
export const getSceneRoute = createSelector(selectSceneRoute, route => route);