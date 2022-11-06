import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[type="range"][multi]'
})
export class MultiRangeDirective {

  constructor() { }

}
