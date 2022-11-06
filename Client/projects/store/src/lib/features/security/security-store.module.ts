import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SECURITY_FEATURE } from './constants';
import { SecurityStoreReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthenicationEffects } from './authenication/effects';
import { AuthorizationService } from './authorization/services/authorization.service';
import { AuthenicationService } from './authenication/services/authenication.service';
import { SECURITY_CONFIG as SECURITY_STORE_CONFIG, SECURITY_STORE } from './constants/security-token.constant';
import { SecurityStoreConfig } from './config/security.config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SECURITY_FEATURE, SECURITY_STORE, SECURITY_STORE_CONFIG),
    EffectsModule.forFeature([
      AuthenicationEffects
    ])
  ],
  providers: [
    {
      provide: SECURITY_STORE,
      useFactory: SecurityStoreReducer,
      deps: [
        AuthenicationService,
        AuthorizationService
      ]
    },
    {
      provide: SECURITY_STORE_CONFIG,
      useFactory: SecurityStoreConfig
    }
  ]
})
export class SecurityStoreModule { }
