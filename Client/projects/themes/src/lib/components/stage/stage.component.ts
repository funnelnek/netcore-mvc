import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { StageService } from '@client/store';

@Component({
  selector: 'lib-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  constructor(
    private stage: StageService,
    private view: ViewContainerRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

}
