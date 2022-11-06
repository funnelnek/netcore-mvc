import { createAction } from "@ngrx/store";
import { STAGE_LOADING } from "../constants/loader-action.constant";


export const startLoading = createAction(STAGE_LOADING);