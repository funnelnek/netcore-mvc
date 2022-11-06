import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginSceneComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './form/login-form.component';
import { ButtonModule } from 'projects/themes/src/lib/components/button/button.module';
import { FormControlsModule } from '@client/themes';


@NgModule({
  declarations: [
    LoginSceneComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    ButtonModule,
    FormControlsModule
  ],
  exports: [
    LoginSceneComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
