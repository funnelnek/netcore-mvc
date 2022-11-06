import { createSelector } from "@ngrx/store";
import { Security } from "@client/core";
import { security } from "./security.selector";


const selectAuthorization = (security: Security) => security.authorization;
export const authorization = createSelector(
    security,
    selectAuthorization
);