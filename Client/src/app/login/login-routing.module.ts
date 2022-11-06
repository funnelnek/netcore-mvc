import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSceneComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginSceneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
