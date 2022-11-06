import { getAdminLoginStatus } from '../selectors/login-status.selector';
import { getAdminAvatar } from '../selectors/avatar.selector';
import { getAdministrator } from '../selectors/admin-feature.selector';
import { Application, LoginCredential } from '@client/core';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Administrator } from '@client/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getAdminTitle } from '../selectors/title.selector';
import { getAdminName } from '../selectors/name.selector';
import { getAdminId } from '../selectors/id.selector';
import { getAdminUsername } from '../selectors/username.selector';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  private static readonly LOGIN_URL = "https://localhost:5001/api/login";
  private static readonly LOGOUT_URL = "https://localhost:5001/api/logout";

  private _admin: Observable<Administrator | null>;


  constructor(
    private store: Store<Application>,
    private http: HttpClient
  ) { 
    this._admin = store.select(getAdministrator);
  }

  get title(): Observable<string | null> {
    return this._admin.pipe(select(getAdminTitle));
  }

  get name(): Observable<string | null> {
    return this._admin.pipe(select(getAdminName));
  }

  get avatar(): Observable<string | null> {
    return this._admin.pipe(select(getAdminAvatar));
  }

  get authenicated(): Observable<boolean | null> {
    return this._admin.pipe(select(getAdminLoginStatus));
  }

  get id(): Observable<string | null> {
    return this._admin.pipe(select(getAdminId));
  }

  get username(): Observable<string | null> {
    return this._admin.pipe(select(getAdminUsername));
  }
}
