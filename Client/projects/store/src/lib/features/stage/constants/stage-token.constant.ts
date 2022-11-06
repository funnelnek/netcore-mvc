import { InjectionToken } from "@angular/core";
import { ActionReducer, StoreConfig } from "@ngrx/store";
import { ActionPayload } from "../../../contracts";
import { StageContext } from "../types";


export const STAGE_STORE = new InjectionToken<ActionReducer<StageContext, ActionPayload>>('Stage Store');
export const STAGE_STORE_CONFIG = new InjectionToken<StoreConfig<StageContext, ActionPayload>>('Stage Store Configuration');