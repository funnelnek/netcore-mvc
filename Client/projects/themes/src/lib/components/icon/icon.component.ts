import { Component, HostBinding, Input, ViewContainerRef } from '@angular/core';
import { IEnumerable } from '@client/core';
import { IconSize } from '../../constants';
import { IconSizeType, IconVariation, ThemePalette } from '../../types';


@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  private _type!: string;
  private _name!: string;
  private _variant!: IconVariation;
  private _color!: ThemePalette;
  private _size: IconSizeType | IconSize | number = IconSize.SMALL;


  constructor(
    private ref: ViewContainerRef    
  ) { }

  @Input()
  set color(value: ThemePalette) {
    this._color = value;
  }

  @Input()
  set size(value: IconSizeType | IconSize | number) {
    this._size = value;
  }

  @Input()
  set type(value: string) {
    this._type = value;
  }

  @Input()
  set name(value: string) {
    this._name = value;
  }

  @Input()
  set variant(value: IconVariation) {
    this._variant = value;
  }

  @HostBinding('class')
  get className(): IEnumerable<boolean> {
    return {
      icon: true
    };
  }

  get type(): string {
    return this._type;
  }

  get variant(): IconVariation {
    return this._variant;
  }

  get name(): string {
    return this._name;
  }

  get color(): ThemePalette {
    return this._color;
  }

  get size(): IconSizeType | IconSize | number {
    return this._size;
  }

}
