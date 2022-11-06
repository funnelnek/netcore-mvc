import { Component, OnInit, OnDestroy, ViewChild, ComponentRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PaneModeState, PaneType } from '@client/core';
import { PaneComponent } from '../../../components/pane/pane.component';
import { AdminBarService } from '@client/store';


@Component({
  selector: 'admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.scss']
})
export class AdminBarComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  private _mode: PaneModeState = "expanded";
  private _variant: PaneType = "persistent";
  private _pane!: ComponentRef<PaneComponent>;
  private _hideBackdrop: boolean = true;
  private _version!: Observable<string>;


  constructor (
    private adminBar: AdminBarService
  ) {    
  }

  get mode(): PaneModeState {
    return this._mode;
  }

  get variant(): PaneType {
    return this._variant;
  }

  get hideBackdrop(): boolean {
    return this._hideBackdrop;
  }

  get version(): Observable<string> {
    return this._version;
  }

  set mode(state: PaneModeState) {
    this._mode = state;
  }

  private get pane(): PaneComponent {
    return this._pane.instance;
  }

  @ViewChild(PaneComponent, { read: ComponentRef, static: true })
  set paneRef(component: ComponentRef<PaneComponent>) {
    this._pane = component;
  }  

  ngOnInit(): void {
    this._subscriptions.push(this.adminBar.mode.subscribe(mode => this.mode = mode));
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onToggleMenu(): void {    
    this.adminBar.onModeChange(this.mode);
  }

}
