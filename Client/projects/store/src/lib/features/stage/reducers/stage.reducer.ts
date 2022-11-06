import { ActionReducerMap } from "@ngrx/store"
import { ActionPayload } from "../../../contracts"
import { StageLoaderStoreReducer } from "../loader"
import { NavigationStoreReducer } from "../navigation"
import { SceneStoreReducer } from "../scene/reducers/scene.reducer"
import { StageContext } from "../types"


export const StageStoreReducer = (): ActionReducerMap<StageContext, ActionPayload> => {
    return {
        scene: SceneStoreReducer(),
        loader: StageLoaderStoreReducer(),
        navigation: NavigationStoreReducer()
    };
}