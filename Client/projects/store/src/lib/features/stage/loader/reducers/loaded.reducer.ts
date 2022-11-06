import { StageLoader } from "../types/stage-loader.type";
import { StageLoaderActionHandler } from "./loader.handler";


export const onStopLoading = (loader: StageLoaderActionHandler) => (state: StageLoader) => loader.stopped(state);