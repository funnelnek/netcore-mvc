import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpResponse,  
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTransferInterceptor } from '@client/core';
import { StageLoaderService } from '../../../stage';


@Injectable({
  providedIn: 'root'
})
export class AuthenicationInterceptor extends DataTransferInterceptor {
  constructor(
    private loader: StageLoaderService
  ) {
    super();
  } 

  override intercept(request: HttpRequest<any>): HttpRequest<any> | Observable<HttpEvent<any>>;
  override intercept(event: HttpEvent<any>): HttpEvent<any>;
  override intercept(http: HttpRequest<any> | HttpEvent<any>): HttpRequest<any> | HttpEvent<any> | Observable<HttpEvent<any>> {
      if (http instanceof HttpRequest) {
        if (this.shouldHandleRequest(http)) {
          this.shouldStartLoader(http) ? this.loader.load() : null;
        }
      } else {
        if (http instanceof HttpResponse) {
          this.loader.stop();
        }
      }

      return http;
  }
  
  protected override shouldHandleRequest(req: HttpRequest<any>): boolean {
      let routes = [
        '/api/authenicate'
      ]

      return routes.includes(req.url);
  }

  protected shouldStartLoader(req: HttpRequest<any>): boolean {
    let urls = [
      '/api/authenicate',
      '/api/logout'
    ];

    return !this.loader.isLoading && urls.includes(req.url);
  }
}
