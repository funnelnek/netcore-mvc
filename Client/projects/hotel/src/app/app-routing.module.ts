import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandHomeComponent } from './grand-home.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: GrandHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
