import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[list]>[item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent<T = any> implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
