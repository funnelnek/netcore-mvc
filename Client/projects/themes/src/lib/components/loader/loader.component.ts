import { Component, HostBinding, OnInit } from '@angular/core';
import { StageLoaderService } from '@client/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'stage-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor (
    private service: StageLoaderService
  ) { }

  @HostBinding('class.show')
  protected get show(): boolean {
    return this.service.isLoading;
  }
  
  get isLoading(): Observable<boolean> {
    return this.service.isLoading$;
  }

  ngOnInit(): void {
  }

}
