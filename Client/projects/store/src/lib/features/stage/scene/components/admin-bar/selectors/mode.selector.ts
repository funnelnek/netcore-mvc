import { createSelector } from "@ngrx/store";
import { AdminBarContext } from "../contracts";


export const selectAdminBarMode = (adminbar: AdminBarContext) => adminbar.mode;
export const getAdminBarMode = createSelector(selectAdminBarMode, mode => mode);