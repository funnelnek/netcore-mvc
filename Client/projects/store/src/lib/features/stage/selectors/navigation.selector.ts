import { Application } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectNavigation = (app: Application ) => app.stage.navigation;
export const getNavigation = createSelector(selectNavigation, navigation => navigation);