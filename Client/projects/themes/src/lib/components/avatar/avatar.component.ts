import { AvatarInitialType } from './types/initial.type';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthenicationStatus, IEnumerable } from '@client/core';
import { AvatarSizeType } from './types/avatar-size.type';


@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  protected host!: ElementRef;

  @Input()
  image: string | null = null;

  @Input()
  size: AvatarSizeType = "small";

  @Input()
  name: string | null = null;

  @Input()
  showTooltip: boolean = false;
  
  @Input()
  initials: AvatarInitialType = "first";
  
  @Input()
  status: AuthenicationStatus = AuthenicationStatus.UNAUTHENICATED
  
  @Input()
  showStatusIndicator: boolean = false;

  @ViewChild("avatar", { read: ElementRef, static: true})
  avatar!: ElementRef;
  
  constructor(private render: Renderer2, ref: ElementRef) { 
    this.host = ref;
  }

  @HostBinding("class")
  get className(): IEnumerable<boolean> {
    return {
      sm: this.size === "small",
      md: this.size === "medium",
      lg: this.size === "large"
    };
  }

  get hasImage(): boolean {
    return this.image !== null;
  }

  get statusIndicator(): IEnumerable<boolean> {
    return {
      status: true
    }
  }  
}
