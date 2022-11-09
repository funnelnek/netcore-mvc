import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { APP_HTTP_INTERCEPTORS_CONFIG } from "@client/core";
import { ApplicationHttpInterceptor } from "./interceptors/application-http.interceptor";
import { config as ApplicationHttpInterceptorsConfig } from './interceptors'
import { RoutePreloadingStrategy } from "../preloader";


export const AppServiceProviders: Provider[] = [   
    RoutePreloadingStrategy, 
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