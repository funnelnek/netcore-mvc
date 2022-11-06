import { Component, Input, OnInit, ViewContainerRef, Injector, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from './base/input.component';


@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormControlComponent)
    }
  ]
})
export class FormControlComponent extends InputComponent implements OnInit {

  constructor (
      view: ViewContainerRef,
      injector: Injector
  ) { 
      super(injector);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    
    switch(this.type) {
      
    }
  }

}
