import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { API_REQUEST_TYPE } from "../context";
import { DataTransfer } from "../../DataTransfer";
import { API_META_CONTEXT } from "../context/api-meta.context";
import { AbstractDataTransferInterceptor, IDataTransfer } from "../../contracts";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class DataTransferInterceptor extends AbstractDataTransferInterceptor {
    private static API_TYPE_ENDPOINT = /^\/api\/([a-zA-Z0-9-]+)/;
    
    constructor() {
        super();
    }

    override intercept(request: HttpRequest<any>): HttpRequest<any> | Observable<HttpEvent<any>>;
    override intercept(event: HttpEvent<any>): HttpEvent<any>;
    override intercept(http: HttpRequest<any> | HttpEvent<any>): HttpRequest<any> | Observable<HttpEvent<any>> | HttpEvent<any> {
        if (http instanceof HttpRequest && this.shouldHandleRequest(http)) {
            let request = http.clone({
                body: new DataTransfer(http.body)
            }) as HttpRequest<DataTransfer>;

            return request;
        }

        if (http instanceof HttpResponse) {
            let response = http.clone({
                body: http.body?.data
            });
            

            return response;
        }

        return http;

    }

    protected shouldHandleRequest(req: HttpRequest<any>): boolean {
        return ['POST', 'PUT', 'PATCH'].includes(req.method);
    }
}