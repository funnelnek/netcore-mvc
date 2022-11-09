import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button/button.module';
import { IconModule } from './components/icon/icon.module';
import { PaneModule } from './components/pane/pane.module';
import { AppBarModule } from './components/appbar/appbar.module';
import { ElevationDirective } from './directives/elevation/elevation.directive';
import { FormControlsModule } from './components';


@NgModule({
  declarations: [
    ElevationDirective,    
  ],
  imports: [],
  exports: [
    ButtonModule,
    IconModule,
    ElevationDirective,
    PaneModule,
    AppBarModule,
    FormControlsModule
  ]
})
export class ThemesModule { }
