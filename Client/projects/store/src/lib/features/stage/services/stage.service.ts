import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, IStageService } from '@client/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getScene } from '../scene/selectors/scene.selector';
import { getStage } from '../selectors/stage-feature.selector';
import { SceneContext, StageContext } from '../types';


@Injectable({
  providedIn: 'root'
})
export class StageService implements IStageService {
  private _stage: Observable<StageContext>;

  constructor(
    private store: Store<Application>,
    private http: HttpClient
  ) {
    this._stage = store.select(getStage);
  }

  get scene(): Observable<SceneContext> {
    return this._stage.pipe(select(getScene))
  }
}
