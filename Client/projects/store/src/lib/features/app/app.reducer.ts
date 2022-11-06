import { createReducer } from "@ngrx/store";
import { ApplicationInitialState } from "./app.state";

export const ApplicationStateManager = createReducer(ApplicationInitialState);