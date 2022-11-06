import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
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
    throw new Error('Method not implemented.');
  }
}
