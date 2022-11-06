import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconModule } from '../icon/icon.module';
import { RippleComponent } from './ripple/ripple.component';
import { ButtonBaseComponent } from './base/base.component';



@NgModule({
  declarations: [    
    ButtonBaseComponent,
    ButtonComponent,
    RippleComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [    
    ButtonComponent,
    RippleComponent
  ]
})
export class ButtonModule { }
