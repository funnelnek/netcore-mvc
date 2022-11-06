import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxInputComponent } from '../checkbox/checkbox-input.component';

@Component({
  selector: 'switch',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SwitchInputComponent)
    }
  ]
})
export class SwitchInputComponent extends CheckboxInputComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
  }

}
