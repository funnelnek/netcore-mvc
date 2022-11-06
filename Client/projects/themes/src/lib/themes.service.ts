import { Injectable } from '@angular/core';
import { Application } from '@client/core';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(
    private store: Store<Application>
  ) {
  }
}
