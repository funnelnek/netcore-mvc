import { 
  Component, 
  EventEmitter, 
  HostBinding, 
  Input, 
  Output, 
  ViewContainerRef, 
  ElementRef, 
  ViewChild,
  AfterViewInit,
  Renderer2,
  HostListener,
  OnInit
} from '@angular/core';
import { IEnumerable, IPane, PaneModeState, PaneType, TransitionAnimation } from '@client/core';
import { AnchorType } from '../../types';


@Component({
  selector: '[pane]',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.scss']
})
export class PaneComponent implements IPane, OnInit, AfterViewInit {
  @Input()  
  mode: PaneModeState = "expanded";

  @Input()
  anchor: AnchorType = "left";

  @Input()
  variant: PaneType = "temporary";

  @Input()
  elevation: number = 0;

  @Input()
  hideBackdrop: boolean = false;

  @Input()
  transition: number | TransitionAnimation = 0;

  @Input()
  flexDirection: "row" | "column" = "column";

  @Input()
  isSwipeable: boolean = false;

  @Input()
  disableEscapeToClose: boolean = false;

  @Input()
  canMinimize: boolean = false;

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  @Output()
  onMinimize: EventEmitter<any> = new EventEmitter();

  @Output()
  onExpand: EventEmitter<any> = new EventEmitter();

  @ViewChild("backdrop", {read: ElementRef, static: true})
  backdrop!: ElementRef;

  constructor(
    protected view: ViewContainerRef,
    protected render: Renderer2
  ) {
  }
  
  @HostBinding("class")
  get className(): IEnumerable<boolean> {
    return {
      pane: true,
      temporary: this.variant === "temporary",
      persistent: this.variant === "temporary",
      permanent: this.variant === "temporary",
      left: this.anchor === "left",
      right: this.anchor === "right",
      top: this.anchor === "top",
      bottom: this.anchor === "bottom",
      minimized: this.mode === "minimized",
      collapsed: this.mode === "collapsed",
      expanded: this.mode === "expanded",
      vertical: this.flexDirection === "column",
      horizontal: this.flexDirection === "row"
    };
  }

  @HostListener("keyup.escape", ['$event'])
  escape(e: KeyboardEvent): void {
    e.stopPropagation();
    
    if (this.mode !== "collapsed") {
      this.close();
    }
  }

  @HostListener("touch", ['$event'])
  swipe(e:TouchEvent): void {
    if (this.isSwipeable) {

    }
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.backdrop) {
      this.render.listen(this.backdrop.nativeElement, 'click', this.close.bind(this));
    }
  }

  close(): void {
    this.onClose.emit();
  }

  expand(): void {
    this.onExpand.emit();
  }

  minimize(): void {
    this.onMinimize.emit();
  }
  
}
