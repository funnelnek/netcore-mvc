import { Component, OnInit, Input, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { INavLink, NavLinkType } from '@client/core';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  protected _link!: INavLink;


  @ViewChild('link', { read: TemplateRef, static: true})
  linkTemplate!: TemplateRef<any>;

  @ViewChild('menu', { read: TemplateRef, static: true})
  menuTemplate!: TemplateRef<any>;

  @ViewChild('mega', { read: TemplateRef, static: true})
  megaTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {

  }

  @Input()
  set link(value: INavLink) {
    this._link = value;
  }

  get type(): NavLinkType {
    return this._link.type;
  }

  get label(): string {
    return this._link.label
  }

  get permalink(): string {
    return this._link.permalink;
  }

  get template(): TemplateRef<any> {
    if (this.type === NavLinkType.MENU) {
      return this.menuTemplate;
    }

    if (this.type === NavLinkType.MEGA) {
      return this.megaTemplate;
    }
    
    return this.linkTemplate;
  }

  @HostBinding('class.active') 
  get isActive(): boolean {
    if (this.permalink === '/' && window.location.pathname !== '/') {
      return false;
    }

    return window.location.pathname.startsWith(this.permalink);
  }

}
