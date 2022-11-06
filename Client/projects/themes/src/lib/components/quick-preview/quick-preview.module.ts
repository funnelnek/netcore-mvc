import { QuickPreviewFeatureModule } from './../../../../../store/src/lib/features/quick-preview/quick-preview-feature.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickPreviewRoutingModule } from './quick-preview-routing.module';
import { QuickPreviewComponent } from './quick-preview.component';


@NgModule({
  declarations: [
    QuickPreviewComponent
  ],
  imports: [
    CommonModule,
    QuickPreviewFeatureModule,
    QuickPreviewRoutingModule
  ]
})
export class QuickPreviewModule { }
