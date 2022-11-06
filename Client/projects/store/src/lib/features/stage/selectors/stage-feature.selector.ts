import { createFeatureSelector } from "@ngrx/store";
import { StageContext } from "../types";


export const getStage = createFeatureSelector<StageContext>("stage");