import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './services/admin.service';
import { StoreModule } from '@ngrx/store';
import { AdminStateManager } from './admin.reducer';
import { AdminFeatureKey } from './constants/admin-feature-key.constant';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AdminFeatureKey, AdminStateManager)
  ],
  providers: [
    AdministratorService
  ]
})
export class AdminStoreModule { }
