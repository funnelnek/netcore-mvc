import { on } from "@ngrx/store";
import { closeQuickPreview } from "../actions/close.action";


export const onClose = on(closeQuickPreview, () => ({ current: null, isShowing: false }))