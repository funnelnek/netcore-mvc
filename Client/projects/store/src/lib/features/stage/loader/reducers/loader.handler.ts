import { StageLoader } from "../types/stage-loader.type";

export class StageLoaderActionHandler {
    constructor () {}

    loading(state: StageLoader): StageLoader {
        return { isLoading: true };
    }

    stopped(state: StageLoader): StageLoader {
        return { isLoading: false };
    }
}