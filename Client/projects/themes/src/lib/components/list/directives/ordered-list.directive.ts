import { ComponentRef, Directive, ElementRef, Input, OnInit, Renderer2, HostBinding } from '@angular/core';
import { ListComponent } from '../list.component';
import { IEnumerable } from '@client/core';


@Directive({
  selector: '[ordered]'
})
export class OrderedListDirective implements OnInit {  
  private _reversed: boolean = false;
  private _start: number = 1;
  private _type: string = "1";
  private _orderBy!: string;
 

  constructor(
    private el: ElementRef,
    private list: ComponentRef<ListComponent>,
    private render: Renderer2
  ) {
  }

  @Input()
  set reversed(state: boolean) {    
    this._reversed = state;
  }

  @Input()
  set start(at: number) {
    this._start = at;
  }

  @Input()
  set type(value: string) {
    this._type = value;
  }

  @Input()
  set by(value: string) {
    this._orderBy = value;
  }

  @HostBinding('class') 
  get className(): IEnumerable<boolean> {
    return {
      a: this.type === 'a',
      A: this.type === 'A',
      i: this.type === 'i',
      I: this.type === 'I',
      n: this.type === '1'
    }
  }

  get reversed(): boolean {
    return this._reversed;
  }

  get start(): number {
    return this._start;
  }

  get type(): string {
    return this._type;
  }

  ngOnInit(): void {    
    if (this.el.nativeElement.tagName.toLowerCase() == 'ol') {
      if (this.reversed) {
        this.render.setProperty(this.el.nativeElement, 'reversed', this.reversed);
      }

      if (this.start !== 1) {
        this.render.setProperty(this.el.nativeElement, 'start', this.start);
      }
    }

    if (this.reversed) {
      this.reverse();
    }

  }

  private reverse() {
    if (this.by) {

    }
    
    this.list.instance.items.toArray().reverse();
  }
}
