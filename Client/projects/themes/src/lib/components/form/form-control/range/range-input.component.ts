import { Component, OnInit, Injector, Input, Renderer2, ViewChild, ElementRef, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { InputComponent } from '../base/input.component';


@Component({
  selector: 'range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeInputComponent),
      multi: true
    }
  ]
})
export class RangeInputComponent extends InputComponent implements OnInit {
  protected _value$: BehaviorSubject<number> = new BehaviorSubject<number>(this.start);
  protected _position$: Observable<number> = this._value$.asObservable();
  protected _start: number = this.min + (this.max - this.min) / 2;
  protected _step: number = 1;
  protected _min: number = 0;
  protected _max: number = 100;

  @ViewChild('fill', { read: ElementRef, static: true })
  fill!: ElementRef<any>;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }  

  @Input()
  set step(value: number) {
    this._step = value;
  }

  @Input()
  set start(value: number) {
    this._start = value;
  }

  @Input()
  set min(value: number) {
    this._min = value;
  }

  @Input()
  set max(value: number) {
    this._max = value;
  }

  get min(): number {
    return this._min;
  }

  get max(): number {
    return this._max;
  }

  get start(): number {
    return this._start;
  }

  get step(): number {
    return this._step;
  }

  get position$(): Observable<{ width: string }> {
    return this._position$.pipe(
      map(x => ({ width: this.value + "%" }))
    );
  }

  override onValueChange(value: string): void {
      let position: number = parseInt(value);

      this.value = position < this.min ? this.min : position > this.max ? this.max : position;

      this._value$.next(position);

      super.onValueChange(position);
  }

  override  ngOnInit(): void {
    super.ngOnInit();
    
    this.start = this.start >= this.min ? this.start : this.min + (this.max - this.min) / 2;
  }
}
