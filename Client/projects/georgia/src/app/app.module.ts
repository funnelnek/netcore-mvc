import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { GeorgiaAppRoutingModule } from './app-routing.module';
import { GeorgiaAppComponent } from './app.component';
import { AboutUsSectionModule } from './components/about-us/about-us-section.module';
import { GeorgiaGalleryModule } from './components/gallery/georgia-gallery.module';
import { GeorgiaHeaderModule } from './components/header/georgia-header.module';
import { GeorgiaHomeComponent } from './gallery-home.component';
import { GeorgiaFooterModule } from './components/footer/georgia-footer.module';
import { GeorgiaCopyrightModule } from './components/copyright/georgia-copyright.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    GeorgiaAppComponent,
    GeorgiaHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    GeorgiaAppRoutingModule,
    GeorgiaHeaderModule,
    AboutUsSectionModule,
    GeorgiaGalleryModule,
    GeorgiaFooterModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [GeorgiaAppComponent],
  exports: [
    GeorgiaHomeComponent
  ]
})
export class GeorgiaAppModule { }
