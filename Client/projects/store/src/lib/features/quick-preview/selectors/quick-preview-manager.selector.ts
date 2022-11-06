import { QuickPreviewState, Application } from '@client/core';
import { createSelector } from '@ngrx/store';

export const selectQuickPreviewStateFromStage = (app: Application): QuickPreviewState => app.stage.scene.components['preview'];
export const getQuickPreviewManager = createSelector(selectQuickPreviewStateFromStage, ((preview: QuickPreviewState) => preview));