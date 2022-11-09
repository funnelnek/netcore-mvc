import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Gallery } from '../../../contracts';


@Injectable({
  providedIn: 'root'
})
export class GalleryResolver implements Resolve<Gallery[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Gallery[] {    
    return [
      {
        name: 'Food Name',
        price: 30.00,
        image: '/assets/images/gallery-img-1.jpeg'
      },
      {
        name: 'Food Name',
        price: 30.00,
        image: '/assets/images/gallery-img-2.jpeg'
      },
      {
        name: 'Food Name',
        price: 30.00,
        image: '/assets/images/gallery-img-3.jpeg'
      },
      {
        name: 'Food Name',
        price: 30.00,
        image: '/assets/images/gallery-img-4.jpeg'
      },
      {
        name: 'Food Name',
        price: 30.00,
        image: '/assets/images/gallery-img-5.jpeg'
      },
      {
        name: 'Food Name',
        price: 30.00,
        image: '/assets/images/gallery-img-6.jpeg'
      }
    ];
  }
}
