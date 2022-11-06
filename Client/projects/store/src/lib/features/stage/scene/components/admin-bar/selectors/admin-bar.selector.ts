import { Application } from "@client/core";
import { createSelector } from "@ngrx/store";
import { AdminBarContext } from "../contracts";


export const selectAdminBar = (app: Application) => app.stage.scene.components["adminBar"];
export const getAdminBar = createSelector(selectAdminBar, component => component as AdminBarContext);