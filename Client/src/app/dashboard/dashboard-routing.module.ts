import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenicationGuard } from '../guards/authenication.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canLoad: [AuthenicationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
