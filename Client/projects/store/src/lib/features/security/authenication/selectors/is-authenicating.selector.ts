import { createSelector } from "@ngrx/store"
import { authenication } from "../../selectors";
import { IAuthenication } from "@client/core";


const selectIsAuthenicating = (authenication: IAuthenication) => authenication.isAuthenicating;

export const isAuthenicating = createSelector(    
    authenication,
    selectIsAuthenicating
);