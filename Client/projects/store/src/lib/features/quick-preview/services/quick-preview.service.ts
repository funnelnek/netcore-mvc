import { getQuickPreviewDisplayStatus } from './../selectors/is-showing.selector';
import { getCurrentQuickPreview } from './../selectors/current-preview.selector';
import { showQuickPreview } from './../actions/preview.action';
import { closeQuickPreview } from './../actions/close.action';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  IQuickPreviewService,
  IQuickPreview,
  IQuickPreviewState
} from '@client/core';
import { getQuickPreviewManager } from '../selectors/quick-preview-manager.selector';
import { Application } from '@client/core';
import { Observable, } from 'rxjs';


@Injectable()
export class QuickPreviewService implements IQuickPreviewService {
  private _preview: Observable<IQuickPreviewState>;

  constructor(private store: Store<Application>) {
    this._preview = store.select(getQuickPreviewManager);
  }

  get isShowing$(): Observable<boolean> {
    return this._preview.pipe(select(getQuickPreviewDisplayStatus));
  }

  get currentPreview$(): Observable<IQuickPreview | null> {
    return this._preview.pipe(select(getCurrentQuickPreview));
  }

  async close(): Promise<void> {
    let action = { payload: { current: null, isShowing: false }};
    this.store.dispatch(closeQuickPreview(action));
  }

  async preview(target: IQuickPreview): Promise<void> {
    let action = { payload: { current: target, isShowing: true }};
    this.store.dispatch(showQuickPreview(action));
  }
}