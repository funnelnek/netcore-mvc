import { ActionReducer, createReducer, on } from "@ngrx/store";
import { ActionPayload } from "projects/store/src/lib/contracts";
import { stopLoading } from "../actions/loaded.action";
import { startLoading } from "../actions/loading.action";
import { StageLoaderInitialState } from "../loader.state";
import { StageLoader } from "../types/stage-loader.type";
import { onStopLoading } from "./loaded.reducer";
import { StageLoaderActionHandler } from "./loader.handler";
import { onLoading } from "./loading.reducer";


export const StageLoaderStoreReducer = (): ActionReducer<StageLoader, ActionPayload> => {
    const handler = new StageLoaderActionHandler();

    const StageLoaderStore = createReducer(
        StageLoaderInitialState,
        on(startLoading, onLoading(handler)),
        on(stopLoading, onStopLoading(handler))
    );

    return StageLoaderStore;
}