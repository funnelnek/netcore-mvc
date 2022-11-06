import { Injectable } from '@angular/core';
import { Application, PaneModeState } from '@client/core';
import { getStoreAppVersion } from '@client/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeAdminBarMode } from '../actions/change-mode.action';
import { AdminBarContext } from '../contracts';
import { getAdminBar, getAdminBarMode } from '../selectors';


@Injectable({
  providedIn: 'root'
})
export class AdminBarService {
  private _adminbar: Observable<AdminBarContext>;
  private _version: Observable<string>;
  
  constructor(private store: Store<Application>) { 
    this._adminbar = store.select(getAdminBar);
    this._version = store.select(getStoreAppVersion);
  }

  get mode(): Observable<PaneModeState> {
    return this._adminbar.pipe(select(getAdminBarMode));
  }

  get version(): Observable<string> {
    return this._version;
  }

  onModeChange(mode: PaneModeState) {
    this.store.dispatch(changeAdminBarMode({ payload: mode }));
  }
  
}
