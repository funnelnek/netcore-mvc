import { Injectable } from '@angular/core';
import { IApplication } from '@client/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getApplication, getAppName, getAppVersion } from '../selectors';
import { ApplicationState } from '../types/application-state.type';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private _app: Observable<ApplicationState>;

  constructor(private store: Store<IApplication>) { 
    this._app = store.select(getApplication);
  }

  get name(): Observable<string> {
    return this._app.pipe(select(getAppName));
  }

  get version(): Observable<string> {
    return this._app.pipe(select(getAppVersion));
  }
}
