import { QuickPreviewService, IProduct, IQuickPreview } from '@client/core';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quick-preview-button',
  templateUrl: './quick-preview-button.component.html',
  styleUrls: ['./quick-preview-button.component.scss']
})
export class QuickPreviewButtonComponent implements OnInit {
  @Input()
  preview!: IQuickPreview;

  @HostListener("click")
  async onPreview(e: MouseEvent): Promise<void> {
    this.service.preview(this.preview);
  }

  constructor(private service: QuickPreviewService) {    
  }

  ngOnInit(): void {
  }

}
