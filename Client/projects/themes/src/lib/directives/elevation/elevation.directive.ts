import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[elevation]'
})
export class ElevationDirective {
  protected _elevation: string = '0';

  constructor() { }
  
  @Input()
  set elevation(level: string) {
    this._elevation = level;
  }

  get elevation(): string {
    return this._elevation;
  }
  
}
