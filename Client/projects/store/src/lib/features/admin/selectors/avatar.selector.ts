import { Administrator } from "@client/core";
import { createSelector } from "@ngrx/store";


export const selectAdminAvatar = (admin: Administrator | null) => admin?.avatar ?? null;
export const getAdminAvatar = createSelector(selectAdminAvatar, avatar => avatar);