import { 
  Component, 
  ComponentRef, 
  ContentChild, 
  ElementRef, 
  Input, 
  OnInit, 
  QueryList, 
  Renderer2,
  HostBinding
} from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { IEnumerable } from '@client/core';


@Component({
  selector: ':not([menu])[list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T = any> implements OnInit {  
  protected _type: string | null = null;
  protected _compact: boolean = false;

  @ContentChild(ListItemComponent, { read: ComponentRef<ListItemComponent<T>> })
  items!: QueryList<ComponentRef<ListItemComponent<T>>>;

  constructor(
    protected list: ElementRef,
    protected render: Renderer2
  ) { }

  @Input()
  set type(value: string | null) {
    this._type = value;
  }

  @Input()
  set compact(value: boolean) {
    this._compact = value;
  }

  @HostBinding("class")
  get className(): IEnumerable<boolean> {
    return {
      disc: this.type === 'disc',
      circle: this.type === 'circle',
      square: this.type === 'square',
      decimal: this.type === 'decimal',
      georgian: this.type === 'georgian'      
    }
  }

  get type(): string | null {
    return this._type;
  }

  get compact(): boolean {
    return this._compact;
  }

  get isOrdered(): boolean {
    return this.list.nativeElement.tagName.toLowerCase() == "ol" || this.list.nativeElement.hasAttribute("ordered");
  }

  ngOnInit(): void {        
  }
}
