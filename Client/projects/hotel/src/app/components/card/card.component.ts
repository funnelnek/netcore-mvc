import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grand-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  protected _title!: string;
  protected _image!: string;
  protected _description!: string;
  protected _cta!: string;


  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  @Input()
  set image(value: string) {
    this._image = value;
  }

  @Input()
  set description(value: string) {
    this._description = value;
  }

  @Input()
  set cta(value: string) {
    this._cta = value;
  }

  get title(): string {
    return this._title;
  }

  get image(): string {
    return this._image;
  }

  get description(): string {
    return this._description;
  }

  get cta(): string {
    return this._cta;
  }
}
