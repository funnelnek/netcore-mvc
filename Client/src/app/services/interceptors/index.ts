import { Type } from "@angular/core";
import { AbstractHttpInterceptor, DataTransferInterceptor, InterceptorConfiguration } from "@client/core";
import { AuthenicationInterceptor, AuthorizationInterceptor } from "@client/store";


export const config: InterceptorConfiguration = {    
};

export const interceptors: Type<AbstractHttpInterceptor>[] = [
    DataTransferInterceptor,
    AuthenicationInterceptor,
    AuthorizationInterceptor
];