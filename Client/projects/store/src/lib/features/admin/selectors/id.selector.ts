import { Administrator, Application } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectAdminId = (admin: Administrator | null) => admin?.id ?? null;
export const selectAdminIdFromStore = (app: Application) =>  app.admin?.id ?? null;
export const getAdminId = createSelector(selectAdminId, id => id);
export const getAdminIdFromStore = createSelector(selectAdminIdFromStore, id => id);
