import { createAction, props } from "@ngrx/store";
import { Payload } from "../../../contracts/Payload";
import { QuickPreviewState } from "../types/quick-preview-state.type";
import { SHOW_QUICK_PREVIEW } from "./constants/show-preview-action.constant";


export const showQuickPreview = createAction(SHOW_QUICK_PREVIEW, props<Payload<QuickPreviewState>>());
