import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeorgiaFooterComponent } from './georgia-footer.component';
import { BrandingModule } from '../branding/branding.module';
import { GeorgiaCopyrightModule } from '../copyright/georgia-copyright.module';
import { SocialMediaModule } from '../social-media/social-media.module';


@NgModule({
  declarations: [
    GeorgiaFooterComponent
  ],
  imports: [
    CommonModule,
    BrandingModule,
    GeorgiaCopyrightModule,
    SocialMediaModule
  ],
  exports: [
    GeorgiaFooterComponent
  ]
})
export class GeorgiaFooterModule { }
