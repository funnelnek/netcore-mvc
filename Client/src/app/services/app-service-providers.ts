import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { APP_HTTP_INTERCEPTORS, APP_HTTP_INTERCEPTORS_CONFIG } from "@client/core";
import { ApplicationHttpInterceptor } from "./interceptors/application-http.interceptor";
import { HttpInterceptors } from "./interceptors/http-interceptor.factory";
import { config as ApplicationHttpInterceptorsConfig } from './interceptors'


export const AppServiceProviders: Provider[] = [    
    {
        provide: APP_HTTP_INTERCEPTORS_CONFIG,
        useValue: ApplicationHttpInterceptorsConfig
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ApplicationHttpInterceptor,
        multi: true
    }
];