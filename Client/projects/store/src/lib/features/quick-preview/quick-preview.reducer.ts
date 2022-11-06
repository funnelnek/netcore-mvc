import * as preview from './reducers';
import { createReducer } from "@ngrx/store";
import { QuickPreviewInitialState } from "./quick-preview.state";



export const QuickPreviewStateManager = createReducer(
  QuickPreviewInitialState,
  preview.onClose,
  preview.onShow
);