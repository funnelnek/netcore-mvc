import { HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export abstract class AbstractHttpInterceptor {   
    abstract intercept(request: HttpRequest<any>): HttpRequest<any> | Observable<HttpEvent<any>>;
    abstract intercept(event: HttpEvent<any>): HttpEvent<any>;
}