import { Security } from "@client/core";
import { MetaReducer } from "@ngrx/store";
import { ActionPayload } from "projects/store/src/lib/contracts";
import { loginMiddleware } from "./login.meta";


export const AuthenicationMeta: MetaReducer<Security, ActionPayload>[] = [
    loginMiddleware
];