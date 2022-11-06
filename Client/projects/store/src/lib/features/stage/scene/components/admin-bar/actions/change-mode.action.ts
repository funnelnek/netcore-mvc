import { PaneModeState } from "@client/core";
import { createAction, props } from "@ngrx/store";
import { Payload } from "../../../../../../contracts";
import { ADMIN_BAR_CHANGE_MODE } from "../constants/change-mode-action.constant";



export const changeAdminBarMode = createAction(ADMIN_BAR_CHANGE_MODE, props<Payload<PaneModeState>>());