import { Administrator } from '@client/core';
import { createFeatureSelector } from "@ngrx/store";


export const getAdministrator = createFeatureSelector<Administrator>("admin");