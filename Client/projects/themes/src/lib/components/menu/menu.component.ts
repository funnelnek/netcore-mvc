import { 
  AfterContentInit, 
  AfterViewInit, 
  Component, 
  ComponentRef, 
  ContentChild, 
  EventEmitter, 
  Input, 
  Output, 
  OnInit, 
  QueryList, 
  ViewChild, 
  ViewContainerRef, 
  HostBinding, 
  Renderer2,
  ElementRef
} from '@angular/core';
import { IEnumerable } from '@client/core';
import { ListComponent } from '../list/list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: '[menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends ListComponent implements OnInit, AfterContentInit, AfterViewInit {
  private _selectedItem: MenuItemComponent | null = null;

  @Input()
  show: boolean = false;

  @Output()
  onSelect: EventEmitter<MenuItemComponent> = new EventEmitter<MenuItemComponent>();  

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  @ViewChild("menu", { read: ViewContainerRef, static: true })  
  menuRef!: ViewContainerRef;

  @ContentChild(MenuItemComponent, { read: ComponentRef<MenuItemComponent>, static: true})
  override items!: QueryList<ComponentRef<MenuItemComponent>>;

  constructor(
    list: ElementRef,
    render: Renderer2
  ) {
    super(list, render);
    this.select = this.select.bind(this);
  }

  @HostBinding("class")
  override get className(): IEnumerable<boolean> {
    return {
      show: this.show
    };
  }

  ngAfterContentInit(): void {
    this.items.forEach(({ location }) => {      
      this.render.listen(location.nativeElement, 'onSelected', this.select);
    });
  }

  ngAfterViewInit(): void {
    
  }

  override ngOnInit(): void {
  }

  select(item: MenuItemComponent): void {
    this._selectedItem = item;
    item.selected = true;
    
    this.items.forEach(ref => {
      if (item !== ref.instance) {
        item.selected = false;
      }
    });
  }

  toggle(): void {
    this.show = !this.show;
  }
}
