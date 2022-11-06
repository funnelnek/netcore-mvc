import { createFeatureSelector } from '@ngrx/store';
import { ApplicationState } from '../types/application-state.type';


export const getApplication = createFeatureSelector<ApplicationState>("app");