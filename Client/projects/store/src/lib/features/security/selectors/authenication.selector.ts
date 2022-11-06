import { createSelector } from "@ngrx/store";
import { Security } from "@client/core";
import { security } from "./security.selector";


const selectAuthenication = (security: Security) => security.authenication;
export const authenication = createSelector(
    security,
    selectAuthenication
);