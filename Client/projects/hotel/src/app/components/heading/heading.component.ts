import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grand-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  private _heading!: string;

  constructor() { }

  @Input()
  set heading(value: string) {
    this._heading = value
  }

  get heading(): string {
    return this._heading;
  }

  ngOnInit(): void {
  }

}
