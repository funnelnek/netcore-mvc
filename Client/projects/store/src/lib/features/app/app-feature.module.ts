import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ApplicationFeatureKey } from './constants/app-feature-key.constant';
import { ApplicationStateManager } from './app.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ApplicationFeatureKey, ApplicationStateManager)
  ]
})
export class AppStoreModule { }
