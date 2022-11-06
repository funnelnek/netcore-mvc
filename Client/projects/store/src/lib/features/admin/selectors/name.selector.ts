import { Administrator } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectAdminName = (admin: Administrator | null) => admin?.name ?? null;
export const getAdminName = createSelector(selectAdminName, name => name);