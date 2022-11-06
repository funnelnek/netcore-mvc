import { QuickPreviewState } from '@client/core';
import { createSelector } from '@ngrx/store';


export const selectQuickPreviewDisplayStatus = (state: QuickPreviewState) => state.isShowing;
export const getQuickPreviewDisplayStatus = createSelector(  
  selectQuickPreviewDisplayStatus,
  isShowing => isShowing
);