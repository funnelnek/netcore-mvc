import { Injectable } from '@angular/core';
import { Application, INavigation } from '@client/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getNavigation } from '../selectors/navigation.selector';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _navigation: Observable<INavigation>;

  constructor (
    private store: Store<Application>
  ) { 
    this._navigation = store.select(getNavigation);
  }

  get navigation(): Observable<INavigation> {
    return this._navigation;
  }
}
