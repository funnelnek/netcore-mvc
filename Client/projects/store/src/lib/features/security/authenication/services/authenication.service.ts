import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrator, Application, LoginCredential } from '@client/core';
import { getAdminId, login, logout } from '@client/store';
import { Store, select } from '@ngrx/store';
import { getAdministrator,isAuthenicating } from '@client/store';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  private admin: Observable<Administrator>;
  private _isAuthenicating: boolean = false;

  constructor (
    private http: HttpClient,
    private store: Store<Application>,
    private router: Router
  ) { 
    this.admin = store.select(getAdministrator);
  }

  get administrator(): Observable<Administrator | null> {
    return this.admin;
  }

  get isAuthenicating(): Observable<boolean> {
    return this.admin.pipe(select(isAuthenicating));
  }

  authenicate(credential: LoginCredential): Observable<Administrator | ValidationErrors> {
    return this.http.post<Administrator | ValidationErrors>('/api/authenicate', credential);
  }

  login(credential: LoginCredential): void {
    this.store.dispatch(login({ payload: credential }));
  }

  logout(): void {    
    let payload: string = '';

    this.admin.pipe(select(getAdminId)).subscribe(id => payload = id as string);
    this.store.dispatch(logout({ payload }));
  }
}
