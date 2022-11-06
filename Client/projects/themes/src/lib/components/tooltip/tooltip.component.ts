import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { AnchorType } from '../../types/anchor-position.type';

@Component({
  selector: 'ui-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  constructor(private render: Renderer2) { }

  @Input()
  target!: ElementRef;

  @Input()
  anchor!: AnchorType;
  
  @HostBinding("class.tooltip")
  get className(): "tooltip" {
    return "tooltip";
  }

  ngOnInit(): void {
    this.position();
  }

  position(): void {
    switch(this.anchor) {

    }
  }
}
