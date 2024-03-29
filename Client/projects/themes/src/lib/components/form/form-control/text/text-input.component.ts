import { Component, forwardRef, HostBinding, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IEnumerable } from '@client/core';
import { AutoComplete } from '../../types';
import { InputComponent } from '../base/input.component';


@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextInputComponent)
    }
  ]
})
export class TextInputComponent extends InputComponent implements OnInit {
  protected _autocomplete: AutoComplete = 'off';
  protected _list!: string;
  protected _max!: number;
  protected _min!: number;
  protected _pattern!: string | RegExp;
  protected _placeholder: string = ' ';
  protected _helperText!: string;
  protected _variant: string = 'standard';
  protected _animated: boolean = false;
  
  constructor (
    injector: Injector
  ) { 
    super(injector);
  }  

  

  @Input()
  set animated(value: boolean) {
    this._animated = value;
  }

  @Input()
  set variant(value: string) {
    this._variant = value;
  }

  @Input()
  set autocomplete(value: AutoComplete) {
    this._autocomplete = value;
  }

  @Input()
  set list(value: string) {
    this._list = value;
  }

  @Input()
  set maxLength(value: number) {
    this._max = value;
  }

  @Input()
  set minLength(value: number) {
    this._min = value;
  }

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
  }  

  @Input()
  set helperText(value: string) {
    this._helperText = value;
  }

  @HostBinding('class')
  get className(): IEnumerable<boolean> {
    return {
      standard: this.variant === 'standard',
      filled: this.variant === 'filled',
      outlined: this.variant === 'outlined',
      animated: this._animated
    };
  }
  
  get variant(): string {
    return this._variant;
  }

  get autocomplete(): AutoComplete {
    return this._autocomplete;
  }

  get list(): string {
    return this._list;
  }

  get placeholder(): string {
    return this._placeholder;
  }

  get maxLength(): number {
    return this._max;
  }

  get minLength(): number {
    return this._min;
  }

  get helperText(): string {
    return this._helperText;
  }

  override ngOnInit(): void {

  }
}
