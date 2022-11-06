import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AbstractHttpInterceptor, APP_HTTP_INTERCEPTORS, APP_HTTP_INTERCEPTORS_CONFIG, InterceptorConfiguration } from '@client/core';


@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpInterceptor implements HttpInterceptor {
  constructor(  
    @Inject(APP_HTTP_INTERCEPTORS) private interceptors: AbstractHttpInterceptor[],
    @Inject(APP_HTTP_INTERCEPTORS_CONFIG) private config: InterceptorConfiguration
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.shouldHandleRequest(req)) {
      return next.handle(req);
    }

    let request: HttpRequest<any> | Observable<HttpEvent<any>> = req;

    for (let handler of this.interceptors) {
      request = handler.intercept(request);

      if (request instanceof Observable) {
        return request;
      }
    }

    return next.handle(request).pipe(
      map(event => this.interceptors.reverse().reduce((response, handler) => handler.intercept(response), event))        
    );
  }

  protected shouldHandleRequest(req: HttpRequest<any>): boolean {
    return !this.config.restricted?.urls?.some(restriction => restriction.test(req.url)) ?? true;
  }
}
