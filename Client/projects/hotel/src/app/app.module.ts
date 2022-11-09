import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrandHomeComponent } from './grand-home.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HeaderModule } from './components/header/header.module';
import { AboutUsModule } from './components/about-us/about-us.module';
import { RoomsModule } from './components/rooms/rooms.module';

@NgModule({
  declarations: [
    AppComponent,
    GrandHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    AboutUsModule,
    RoomsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    GrandHomeComponent
  ]
})
export class AppModule { }
