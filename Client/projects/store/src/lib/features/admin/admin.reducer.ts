import { createReducer, on } from "@ngrx/store";
import { AdminInitialState } from "./admin.state";


export const AdminStateManager = createReducer(
  AdminInitialState,
);