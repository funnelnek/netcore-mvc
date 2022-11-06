import { createFeatureSelector } from "@ngrx/store";
import { Security } from "@client/core";
import { SECURITY_FEATURE } from "../constants";


export const security = createFeatureSelector<Security>(SECURITY_FEATURE);