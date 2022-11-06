import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ApplicationStoreModule } from '@client/store';
import { ThemesModule } from '@client/themes';
import { RouterModule } from '@angular/router';
import { AppServiceProviders } from './services/app-service-providers';
import { APP_HTTP_INTERCEPTORS } from '@client/core';
import { HttpInterceptors } from './services/interceptors/http-interceptor.factory';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApplicationStoreModule,
    RouterModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
    ThemesModule
  ],
  providers: AppServiceProviders.concat([
    {
      provide: APP_HTTP_INTERCEPTORS,
      useFactory: HttpInterceptors<AppModule>       
    }
  ]),
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
