import { StageLoader } from "../types/stage-loader.type";
import { StageLoaderActionHandler } from "./loader.handler";


export const onLoading = (loader: StageLoaderActionHandler) => (state: StageLoader) => loader.loading(state);