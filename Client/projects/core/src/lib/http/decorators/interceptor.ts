import { Type } from "@angular/core";
import { AbstractHttpInterceptor } from "../contracts";


export const Interceptor = () => {
    return (ctor: Type<AbstractHttpInterceptor>) => ctor;
}