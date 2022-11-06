import { InjectionToken } from "@angular/core";
import { AbstractHttpInterceptor, InterceptorConfiguration } from "../contracts";


export const APP_HTTP_INTERCEPTORS = new InjectionToken<AbstractHttpInterceptor[]>('Application HTTP Interceptors');
export const APP_HTTP_INTERCEPTORS_CONFIG = new InjectionToken<InterceptorConfiguration>('Application HTTP Interceptors Configuration');