import { createAction } from "@ngrx/store";
import { STAGE_LOADED } from "../constants";


export const stopLoading = createAction(STAGE_LOADED);