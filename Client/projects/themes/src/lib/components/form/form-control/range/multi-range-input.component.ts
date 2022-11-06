import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, fromEvent, map, mergeMap, Observable, Subscription } from 'rxjs';
import { MultiRangeDirective } from './directives/multi-range.directive';

@Component({
  selector: 'multi-range-input',
  templateUrl: './multi-range-input.component.html',
  styleUrls: ['./multi-range-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiRangeInputComponent),
      multi: true
    }
  ]

})
export class MultiRangeInputComponent implements ControlValueAccessor, OnInit, AfterContentInit, OnDestroy {
  protected _first$!: BehaviorSubject<number>;
  protected _last$!: BehaviorSubject<number>;
  protected _value!: any;  
  protected _min: number = 0;
  protected _max: number = 100;
  protected _control: AbstractControl | null;
  protected _disabled: boolean = false;
  protected _changes!: Subscription;  
  protected _controls: FormControl[] = [];
  protected _firstControlChanges!: Subscription;
  protected _lastControlChanges!: Subscription;
  protected onChange!: (value: any) => void;
  protected touched!: () => void;

  @ContentChildren(MultiRangeDirective, { read: ElementRef })
  ranges!: QueryList<ElementRef<HTMLInputElement>>;

  constructor(private render: Renderer2, container: ControlContainer) {
    this._control = container.control;    
  }  

  @Input()
  set min(value: number) {
    this._min = value;
  }

  @Input()
  set max(value: number) {
    this._max = value;
  }
  
  set value(value: any) {
    this.control?.setValue(value);;
  }

  set disable(value: boolean) {
    value ? this.control?.disable() : this.control?.enable();
  }

  get min(): number {
    return this._min;
  }

  get max(): number {
    return this._max;
  }

  get value(): any {
    return this.control?.value;
  }

  get control(): AbstractControl | null {
    return this._control;
  }

  get disable(): boolean {
    return this._disabled;
  }

  get sliders(): { name: string | number, control: FormControl }[] { 
    return this.control instanceof FormGroup || this.control instanceof FormArray ? 
    Object.entries(this.control.controls)
    .filter(([_, control]) => control instanceof FormControl)
    .map(([name, control]) => {
      return {
        name, 
        control: control as FormControl
      }
    }) : [];
  }

  get range$(): Observable<{ left: string, right: string }> {
    return this._first$.pipe(
      mergeMap(start => this._last$.pipe(
        map(end => ({ left: start + '%', right: end + '%' }))
      ))
    );
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
  
  ngOnInit(): void {
    if (this.control) {
      this._changes = this.control.valueChanges.subscribe(this.onValueChange);
    }   
  }

  ngAfterContentInit(): void { 
    if (this.ranges.length) {
      let first = this.ranges.first.nativeElement;
      let last = this.ranges.last.nativeElement;

      this.min = parseInt(first.min);
      this.max = parseInt(last.max);

      this._firstControlChanges = fromEvent(first, 'input').pipe(
        map(e => this.calculatePosition((e.target as HTMLInputElement)))
      ).subscribe(this._first$);

      this._lastControlChanges = fromEvent(last, 'input').pipe(
        map(e => this.calculatePosition((e.target as HTMLInputElement)))
      ).subscribe(this._last$);

      this.ranges.forEach(({ nativeElement: el }) => {
        this.render.listen(el, 'input', this.onInputChange);
      });
    }
  }

  ngOnDestroy(): void {
    this._changes.unsubscribe();
    this._firstControlChanges.unsubscribe();
    this._lastControlChanges.unsubscribe();
  }

  onValueChange(value: any): void {
    this.onChange(value);
    this.touched();
  }

  protected onInputChange(event: Event): void {    
    let target = event.target as HTMLInputElement;
    let name = target.name;
    let position = this.calculatePosition(target);

    this.control?.get(name)?.setValue(position);
  }

  protected calculatePosition(range: HTMLInputElement): number {
    if (!(range instanceof HTMLInputElement) || range.type !== 'range') {
      throw new Error('MultRangeInputComponent: calculatePosition takes an HTMLInputElement of type range.');
    }
    
    let value: number = parseInt(range.value);
    let min: number = this.getMaxValue(range);
    let max: number = this.getMinValue(range);

    if (value > max) {
      return max;
    }

    if (value < min) {
      return min;
    }

    return value;
  }

  protected getMaxValue(range: HTMLInputElement): number {    
    let next: Element | null = range.nextElementSibling;    
    let max = parseInt(range.max);

    if (next instanceof HTMLInputElement && next.type.toLowerCase() === 'range') {
      return parseInt(next.value) - 1;
    }

    return max;
  }

  protected getMinValue(range: HTMLInputElement): number {
    let prev: Element | null = range.previousElementSibling;    
    let min = parseInt(range.min);

    if (prev instanceof HTMLInputElement && prev.type.toLowerCase() === 'range') {
      return parseInt(prev.value) + 1;
    }

    return min;
  }

}
