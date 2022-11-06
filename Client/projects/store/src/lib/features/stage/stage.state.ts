import { IStageContext, NavLinkType } from "@client/core";
import { StageLoaderInitialState } from "./loader";
import { NavigationInitialState } from "./navigation/navigation.state";
import { SceneInitialState } from "./scene/scene.state";


export const StageInitialState: IStageContext = {
    scene: SceneInitialState,
    navigation: NavigationInitialState,
    loader: StageLoaderInitialState
};