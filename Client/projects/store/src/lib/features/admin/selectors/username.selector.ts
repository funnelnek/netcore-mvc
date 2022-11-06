import { Administrator } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectAdminUsername = (admin: Administrator | null) => admin?.username ?? null;
export const getAdminUsername = createSelector(selectAdminUsername, username => username);