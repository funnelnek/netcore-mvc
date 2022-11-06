import { Component, Input, OnInit, Injector } from '@angular/core';
import { AsyncValidatorFn, ControlValueAccessor, FormControl, FormControlDirective, FormControlName, NgControl, ValidatorFn } from '@angular/forms';
import { Input as InputType } from '../../types';
import { InputUpdate } from '../../types/input-update.type';

@Component({
  selector: 'input-control',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']  
})
export class InputComponent implements OnInit, ControlValueAccessor {
  protected _type: InputType = 'text';
  protected _value!: any;
  protected _disabled: boolean = false;
  protected _form!: string;
  protected _name!: string | number | null;
  protected _control!: FormControl;
  protected _defaultValue!: any;
  protected _label!: string;
  protected _updateOn: InputUpdate = 'change';
  protected _nonNullable: boolean = false;
  protected _validators!: ValidatorFn | ValidatorFn[];
  protected _asyncValidators!: AsyncValidatorFn | AsyncValidatorFn[];
  protected _errorMessage!: string;
  protected onChange!: (value: any) => void;
  protected touched!: () => void;

  constructor(
    protected injector: Injector
  ) { }  

  @Input()
  set validators(value: ValidatorFn | ValidatorFn[]) {
    this._validators = value;
  }

  @Input()
  set asyncValidators(value: AsyncValidatorFn | AsyncValidatorFn[]) {
    this._asyncValidators = value;
  }  
  
  @Input()
  set nonNullable(value: boolean) {
    this._nonNullable = value;
  }

  @Input()
  set updateOn(value: InputUpdate) {
    this._updateOn = value;
  }

  @Input()
  set label(value: string) {
    this._label = value;
  }
  @Input()
  set defaultValue(value: any) {
    this._defaultValue = value;
  }

  @Input()
  set type(value: InputType) {
    this._type = value;
  }

  @Input()
  set value(value: any) {
    this._value = value;
  }

  @Input()
  set disable(value: boolean) {
    this._disabled = value;
  }

  @Input()
  set form(value: string) {
    this._form = value;
  }

  @Input()
  set name(value: string | number | null) {
    this._name = value;
  }

  @Input()
  set control(value: FormControl) {
    this._control = value;
  }

  @Input()
  set errorMessage(value: string) {

  }

  get updateOn(): InputUpdate {
    return this._updateOn;
  }

  get type(): InputType {
    return this._type;
  }

  get defaultValue(): any {
    return this._defaultValue;
  }

  get value(): any {
    return this._value;
  }

  get disable(): boolean {
    return this._disabled;
  }

  get form(): string {
    return this._form;
  }

  get name(): string | number | null {
    return this._name;
  }

  get control(): FormControl {
    return this._control;
  }
  
  get label(): string {
    return this._label;    
  }

  get validators(): ValidatorFn | ValidatorFn[] {
    return this._validators
  }

  get asyncValidators(): AsyncValidatorFn | AsyncValidatorFn[] {
    return this._asyncValidators
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  ngOnInit(): void {
    let name: string | number | null;

    if (!this.control) {
      let directive = this.injector.get(NgControl);

      if (!directive) {
        this.control = new FormControl(this.value, { updateOn: this.updateOn });

        if (this.validators) {
          this.control.addValidators(this.validators);
        }

        if (this.asyncValidators) {
          this.control.addAsyncValidators(this.asyncValidators);
        }

      } else {
        name = directive.name;
    
        if (directive instanceof FormControlName) {
          this.control = directive.formDirective?.get(directive.name) ?? null;
        }
    
        if (directive instanceof FormControlDirective) {      
          this.control = directive.control;
        }
      }      
    }
  }

  reset() {
    this.control.reset(this.defaultValue);    
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onValueChange(value: any): void {
    if (this.updateOn === 'change') {
      this.onChange(value);  
    }    
  }

  onTouched() {
    if (this.updateOn === 'blur') {
      this.onChange(this.value);
    }

    this.touched();
  }
}
