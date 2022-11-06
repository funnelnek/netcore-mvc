import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  HostBinding, 
  HostListener, 
  EventEmitter, 
  ElementRef,
  ViewChild} from '@angular/core';
import { getPointerCoordinate } from '@client/core';
import { ThemePalette } from '../../../types';
import { RippleComponent } from '../ripple/ripple.component';


@Component({
  selector: "button[base]",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"]
})
export class ButtonBaseComponent implements OnInit {
  protected _label!: string;
  protected _disabled: boolean = false;
  protected _color!: ThemePalette;
  protected _disableRipple: boolean = false;
  protected _pressed: boolean = false;
  protected _defaultColor?: ThemePalette = "primary";

  @Input()
  rippleColor!: string;

  @Output()
  onCommand: EventEmitter<any> = new EventEmitter();
  
  @ViewChild(RippleComponent)
  ripple!: RippleComponent;

  constructor(private ref: ElementRef) {
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  @Input()
  set color(value: ThemePalette) {
    this._color = value;
  }

  @Input()
  set disableRipple(value: boolean) {
    this._disableRipple = value;
  }

  @Input()
  set label(value: string) {
    this._label = value;
  }
  
  get label(): string {
    return this._label;
  }

  get disableRipple(): boolean {
    return this._disableRipple;
  }

  get isIconic(): boolean {
    return this.ref.nativeElement.hasAttribute('iconic');
  }

  @HostBinding('class.rounded')
  get isRounded(): boolean {
    return this.ref.nativeElement.hasAttribute('rounded');
  }

  @HostBinding("attr.disabled")
  get isDisabled() : boolean {
    return this.disabled;
  }

  @HostBinding("class.pressed")
  get isPressed() {  
    return this._pressed;
  }

  @HostListener("click", ["$event"])
  execute(e: MouseEvent | PointerEvent): void {    
    if (this.disableRipple) {
      return this.onCommand.emit(this);
    }

    let coordinate = getPointerCoordinate(e);
    
    this.ripple.setPointer(coordinate);
    this.ripple.animate();
    this.onCommand.emit(this);
  }

  @HostListener("mousedown", ["$event"])
  onPressed(e: MouseEvent): void {}


  ngOnInit(): void {

  }
}
