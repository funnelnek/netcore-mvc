import { createAction, props } from "@ngrx/store";
import { CLOSE_QUICK_PREVIEW } from "./constants/close-preview-action.constant";
import { Payload } from '../../../contracts/Payload';
import { QuickPreviewState } from "../types/quick-preview-state.type";


export const closeQuickPreview = createAction(CLOSE_QUICK_PREVIEW, props<Payload<QuickPreviewState>>());
