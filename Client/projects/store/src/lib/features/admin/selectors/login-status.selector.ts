import { Administrator } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectAdminLoginStatus = (admin: Administrator | null) => admin?.authenicated ?? null;
export const getAdminLoginStatus = createSelector(selectAdminLoginStatus,  status => status)