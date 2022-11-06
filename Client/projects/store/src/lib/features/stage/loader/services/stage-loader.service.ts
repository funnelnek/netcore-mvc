import { Injectable } from '@angular/core';
import { Application } from '@client/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { startLoading, stopLoading } from '../actions';
import { getStoreStageLoaderStatus } from '../selectors/is-loading-from-store.selector';
import { getStoreStageLoader } from '../selectors/loader-from-store.selector';
import { StageLoader } from '../types';


@Injectable({
  providedIn: 'root'
})
export class StageLoaderService {
  private _isLoadingState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _isLoading$: Observable<boolean> = this._isLoadingState$.asObservable();
  private _isLoading: boolean = false;
  private _loader: Observable<StageLoader>;

  constructor(
    private store: Store<Application>
  ) {
    this._loader = store.select(getStoreStageLoader);
    this._isLoadingState$.subscribe(status => this._isLoading = status);    
    store.select(getStoreStageLoaderStatus).subscribe(this._isLoadingState$);
  }

  get isLoading(): boolean {
    return this._isLoading;
  }
  
  get isLoading$(): Observable<boolean> {
    return this._isLoading$;
  }

  get loader$(): Observable<StageLoader> {
    return this._loader;
  }

  load(): void {
    this.store.dispatch(startLoading());
  }

  stop(): void {
    this.store.dispatch(stopLoading());
  }

}
