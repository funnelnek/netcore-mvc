import { InjectionToken } from "@angular/core";
import { Security } from "@client/core";
import { StoreConfig } from "@ngrx/store";
import { ActionPayload } from "../../../contracts";


export const SECURITY_STORE = new InjectionToken<Security>('Security Store');
export const SECURITY_CONFIG = new InjectionToken<StoreConfig<Security, ActionPayload>>('Security Configuration');