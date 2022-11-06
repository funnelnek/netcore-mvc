import { Component, HostBinding, OnInit } from '@angular/core';
import { IEnumerable } from '@client/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  get className(): IEnumerable<boolean> {
    return {
      
    }
  }


  ngOnInit(): void {
  }
}
