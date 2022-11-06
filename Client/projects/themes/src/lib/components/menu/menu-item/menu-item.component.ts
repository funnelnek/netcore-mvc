import { 
  Component, 
  EventEmitter, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';
import { IEnumerable } from '@client/core';
import { ListItemComponent } from '../../list/list-item/list-item.component';


@Component({
  selector: 'menu-item,li.menu-item,[menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent extends ListItemComponent implements OnInit {
  @Input()
  selected: boolean = false;

  @Output()
  onSelected: EventEmitter<MenuItemComponent> = new EventEmitter<MenuItemComponent>();

  constructor() {
    super();
   }

  @HostBinding("class")
  get className(): IEnumerable<boolean> {
    return {
      selected: this.selected
    };
  }

  @HostListener("click")
  onSelect() {
    this.onSelected.emit(this);
  }
}
