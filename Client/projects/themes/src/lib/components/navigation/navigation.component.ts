import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { INavLink } from '@client/core';
import { NavigationService } from 'projects/store/src/lib/features/stage/services/navigation.service';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private _links!: Observable<INavLink[]>;
  private _mode!: string;

  constructor (
    private service: NavigationService
  ) { }

  ngOnInit(): void {
    this._links = this.service.navigation.pipe(map(navigation => navigation.links));
  }

  get links(): Observable<INavLink[]> {
    return this._links;
  }
  
  get mode(): string {
    return this._mode;
  }
}
