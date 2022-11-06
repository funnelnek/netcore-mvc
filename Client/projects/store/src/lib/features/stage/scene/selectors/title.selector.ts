import { createSelector } from "@ngrx/store";
import { SceneContext } from "../../types/scene-context.type";


export const selectSceneTitle = (scene: SceneContext) => scene.title;
export const getSceneTitle = createSelector(selectSceneTitle, title => title);