import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonBaseComponent } from './base/base.component';


@Component({
  selector: 'button[iconic], button[rounded], button[base]',
  templateUrl: './base/base.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends ButtonBaseComponent implements OnInit { 
  protected _iconTemplate!: TemplateRef<any>;
  
  
  constructor(ref: ElementRef) { 
    super(ref);
  }

  @ViewChild('iconic', { read: TemplateRef, static: true })
  set iconicTmpl(value: TemplateRef<any>) {
    this._iconTemplate = value;
  }

  get iconicTmpl(): TemplateRef<any> {
    return this._iconTemplate;
  }

  get variant(): TemplateRef<any> {    
    return this._iconTemplate    
  }  
}
