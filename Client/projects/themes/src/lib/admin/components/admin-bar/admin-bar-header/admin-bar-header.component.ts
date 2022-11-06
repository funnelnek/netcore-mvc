import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { IEnumerable, PaneModeState } from '@client/core';
import { AdminBarService } from '@client/store';


@Component({
  selector: 'admin-bar-header',
  templateUrl: './admin-bar-header.component.html',
  styleUrls: ['./admin-bar-header.component.scss']
})
export class AdminBarHeaderComponent implements OnInit {
  private _mode!: PaneModeState;

  @Output()
  onToggleMenu: EventEmitter<any> = new EventEmitter();

  constructor(private adminBar: AdminBarService) {
  }
  
  @HostBinding("class")
  get className(): IEnumerable<boolean> {
    return {
      collapsed: this._mode === "collapsed",
      minimized: this._mode === "minimized"
    };
  }
  
  ngOnInit(): void {
    this.adminBar.mode.subscribe(mode => this._mode = mode);
  }

  toggleMenu() {
    this.onToggleMenu.emit();
  }
}
