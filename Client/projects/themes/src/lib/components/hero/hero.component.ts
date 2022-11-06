import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Image } from '@client/core';


@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  protected _backdrop!: Image;
  protected _overlay: string = 'transparent';

  @ViewChild('background', { read: ElementRef<HTMLDivElement>, static: true })
  backdropRef!: ElementRef<HTMLDivElement>;

  @ViewChild('content', { read: ElementRef<HTMLDivElement>, static: true })
  contentRef!: ElementRef<HTMLDivElement>;

  constructor(
    public ref: ElementRef,
    private render: Renderer2
  ) { }

  ngAfterViewInit(): void {
    if (this.backdrop) {
      let bg = this.backdropRef.nativeElement;
      let overlay = bg.querySelector('.hero-overlay');

      this.render.setStyle(overlay, 'background-color', this.overlay);
    }
  }

  ngOnInit(): void {}

  @Input()
  set backdrop(value: Image) {
    this._backdrop = value;
  }

  @Input()
  set overlay(value: string) {
    this._overlay = value;
  }

  get backdrop(): Image {
    return this._backdrop;
  }

  get overlay(): string {
    return this._overlay;
  }

}
