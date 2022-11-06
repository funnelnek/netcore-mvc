import { HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractHttpInterceptor } from "@client/core";
import { Observable } from "rxjs";
import { AuthorizationService } from "./authorization.service";


@Injectable({
    providedIn: 'root'
})
export class AuthorizationInterceptor extends AbstractHttpInterceptor {

    constructor(private service: AuthorizationService) {
        super();
    }

    intercept(request: HttpRequest<any>): HttpRequest<any> | Observable<HttpEvent<any>>;
    intercept(event: HttpEvent<any>): HttpEvent<any>;
    intercept(http: HttpEvent<any> | HttpRequest<any>): HttpRequest<any> | HttpEvent<any> | Observable<HttpEvent<any>> {
        if (http instanceof HttpRequest && this.shouldHandleRequest(http)) {
            let headers = new HttpHeaders();
            
            headers.append('Authorization', this.service.token);
            
            let request = http.clone({
                headers
            });

            return request;
        }

        return http;
    }

    protected shouldHandleRequest(req: HttpRequest<any>): boolean {
        return req.url.startsWith('/api');
    }
}