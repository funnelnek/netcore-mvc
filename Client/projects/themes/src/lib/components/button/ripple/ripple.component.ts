import { Component, ElementRef, OnInit, Renderer2, ViewContainerRef, Input, HostListener } from '@angular/core';
import { PointerCoordinate } from '@client/core';


@Component({
  selector: '[ripple]',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent implements OnInit {
  protected _size!: number;
  protected _parent!: HTMLElement;
  protected _defaultColor: string = '#768b8c';
  protected _color!: string;

  
  constructor(
    protected ref: ElementRef,
    protected view: ViewContainerRef,
    protected render: Renderer2
  ) {
  }

  @Input()
  set color(value: string ) {
    this._color = value;
  }

  get color(): string {
    return this._color ?? this._defaultColor;
  }
  
  ngOnInit(): void {
    this._parent = this.render.parentNode(this.ref.nativeElement);
  }

  setPointer({x , y}: PointerCoordinate) {
    let el = this.ref.nativeElement;
    this.render.setStyle(el, 'left', x + '%');
    this.render.setStyle(el, 'top', y + '%');
  }

  animate() {
    let parent = this._parent;
    let ref = this.ref.nativeElement;
    let width = Math.pow(parent.offsetWidth, 2);
    let heigth = Math.pow(parent.offsetHeight, 2)
    let maxSize = Math.ceil(Math.sqrt(width + heigth) * 2 / 100);

    this.render.addClass(ref, 'show');
    this.render.setStyle(ref, 'width', maxSize + 'px');
    this.render.setStyle(ref, 'height', maxSize + 'px');
    this.render.setStyle(ref, 'background-color', this.color);
  }

  @HostListener('animationend')
  protected onAnimationEnd() {
    let el = this.ref.nativeElement;

    this.render.removeClass(el, 'show');    
    this.render.removeStyle(el, 'left');
    this.render.removeStyle(el, 'top');
    this.render.removeStyle(el, 'width');
    this.render.removeStyle(el, 'height');
  }
}
