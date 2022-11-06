import { Action } from "@ngrx/store";
import { Payload } from "./Payload";


export interface ActionPayload<T = any> extends Action, Payload<T> {}