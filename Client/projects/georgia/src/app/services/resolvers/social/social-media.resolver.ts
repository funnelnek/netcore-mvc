import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SocialHandler } from '../../../contracts';


@Injectable({
  providedIn: 'root'
})
export class SocialMediaResolver implements Resolve<SocialHandler[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SocialHandler[] {
    return [
      {
        site: 'facebook',
        handle: ''
      },
      {
        site: 'instagram',
        handle: ''
      },
      {
        site: 'google-plus',
        handle: ''
      },
      {
        site: 'youtube',
        handle: ''
      }
    ];
  }
}
