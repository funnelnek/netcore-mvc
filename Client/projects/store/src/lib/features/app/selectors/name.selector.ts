import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../types/application-state.type";


export const selectAppName = (app: ApplicationState) => app.name;
export const getAppName = createSelector(selectAppName, name => name);