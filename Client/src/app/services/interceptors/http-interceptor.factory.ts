import { NgModuleRef, inject } from "@angular/core";
import { AbstractHttpInterceptor } from "@client/core";
import { interceptors } from '.';


export const HttpInterceptors = <T>({ injector }: NgModuleRef<T>): AbstractHttpInterceptor[] => {
    return interceptors.map(interceptor => injector.get(interceptor, inject(interceptor)));
}