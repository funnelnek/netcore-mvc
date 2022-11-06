import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { OrderedListDirective } from './directives/ordered-list.directive';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    OrderedListDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    OrderedListDirective
  ]
})
export class ListModule { }
