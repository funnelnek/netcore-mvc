import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../base/input.component';


@Component({
  selector: 'checkbox',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxInputComponent),
      multi: true
    }
  ]
})
export class CheckboxInputComponent extends InputComponent implements OnInit {
  protected _checked: boolean = false;  
  
  constructor(injector: Injector) {
    super(injector);
  }

  @Input()
  set checked(value: boolean) {
    this._checked = value;
  }

  get checked(): boolean {
    return this._checked;
  }

  override ngOnInit(): void {
    super.ngOnInit();

  }

}
