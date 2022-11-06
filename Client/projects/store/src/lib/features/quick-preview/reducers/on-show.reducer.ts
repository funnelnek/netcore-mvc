import { on } from "@ngrx/store";
import { showQuickPreview } from "../actions/preview.action";
import { ActionPayload } from "../../../contracts/ActionPayload";
import { QuickPreviewState } from "../types/quick-preview-state.type";


export const onShow = on(showQuickPreview, (_, { payload }: ActionPayload<QuickPreviewState>) => ({ ...payload }))