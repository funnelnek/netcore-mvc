import { Observable, Subscription } from 'rxjs';
import { 
  Component, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  ViewChild, 
  AfterViewInit, 
  Renderer2, 
  ViewContainerRef,
  OnDestroy
} from '@angular/core';
import { IQuickPreview } from '@client/core';
import { QuickPreviewService, ShoppingCartService } from '@client/store';


@Component({
  selector: 'quick-preview',
  templateUrl: './quick-preview.component.html',
  styleUrls: ['./quick-preview.component.scss']
})
export class QuickPreviewComponent implements OnInit, AfterViewInit, OnDestroy {
  private _container!: ElementRef;
  private _closeButton!: ElementRef;
  private _isShowing: boolean = false;
  private _subscription: Subscription[]  = [];
  private _preview: IQuickPreview | null = null;

  constructor(
    private preview: QuickPreviewService,
    private cart: ShoppingCartService,
    private render: Renderer2,
    private host: ViewContainerRef
  ) {
  } 

  @ViewChild("container", { read: ElementRef, static: true})
  protected set containerRef(container: ElementRef) {
    this._container = container;
  }

  @ViewChild("closeBtn", { read: ElementRef, static: true})
  protected set closeBtnRef(closeButton: ElementRef) {
    this._closeButton = closeButton;
  }

  @HostBinding("class.show")
  get isShowing(): boolean {
    return this._isShowing;
  }

  get container(): HTMLDivElement {
    return this._container.nativeElement;
  }

  get closeButton(): HTMLButtonElement {
    return this._closeButton.nativeElement;
  }

  get preview$(): Observable<IQuickPreview | null> {
    return this.preview.currentPreview$;
  }

  @HostListener("click", ['$event.target'])
  close(e: EventTarget): void {    
    if (this.isClosableViaTarget(e)) {
      this.preview.close();
    }
  }

  @HostListener("keyup.escape", ['$event'])
  esc(e: KeyboardEvent) {
    this.preview.close();    
  }
  
  async ngOnInit(): Promise<void> {
    this._subscription.push(this.preview.isShowing$.subscribe(isShowing => this._isShowing = isShowing));
    this._subscription.push(this.preview.currentPreview$.subscribe(preview => this._preview = preview));
  }

  async ngAfterViewInit(): Promise<void> {    
    this.render.listen(this.closeButton, "click", this.close);
  }

  async ngOnDestroy(): Promise<void> {
    this._subscription.forEach(subscription => subscription.unsubscribe());
  }

  async addToCart(): Promise<void> {
    
  }

  async addToWishlist(): Promise<void> {

  }

  private isClosableViaTarget(target: EventTarget): boolean {
    return target === this.host.element.nativeElement || target == this.closeButton;
  }

}
