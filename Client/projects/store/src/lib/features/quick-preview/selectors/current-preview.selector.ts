import { createSelector } from '@ngrx/store';
import { QuickPreviewState } from '@client/core';


export const selectCurrentQuickPreview = (state: QuickPreviewState) => state.current;
export const getCurrentQuickPreview = createSelector(selectCurrentQuickPreview,preview => preview);