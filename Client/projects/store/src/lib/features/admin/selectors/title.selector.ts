import { Administrator } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectAdminTitle = (admin: Administrator | null) => admin?.title ?? null;
export const getAdminTitle = createSelector(selectAdminTitle, title => title);