import { ActionReducer, combineReducers, createReducer } from "@ngrx/store";
import { ActionPayload } from "../../../../contracts";
import { SceneContext } from "../../types";
import { SceneInitialState } from "../scene.state";
import { SceneActionHandler } from "./scene.handler";


export const SceneStoreReducer = (): ActionReducer<SceneContext, ActionPayload> => {
    const handler = new SceneActionHandler();

    const SceneStore = createReducer(
        SceneInitialState
    );

    return SceneStore;
};