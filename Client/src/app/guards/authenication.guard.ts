import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthenicationService } from '@client/store';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenicationGuard implements CanLoad {
  constructor(
    private auth: AuthenicationService
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }
}
