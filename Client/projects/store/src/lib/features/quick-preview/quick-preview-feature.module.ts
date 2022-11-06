import { QuickPreviewStateManager } from './quick-preview.reducer';
import { QuickPreviewFeatureKey } from './quick-preview.state';
import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { QuickPreviewService } from './services/quick-preview.service';


@NgModule({
  imports: [
    StoreModule.forFeature(QuickPreviewFeatureKey, QuickPreviewStateManager)
  ],
  providers: [
    QuickPreviewService
  ]
})
export class QuickPreviewFeatureModule {}