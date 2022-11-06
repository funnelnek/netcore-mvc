import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenicationGuard } from './guards/authenication.guard';
import { RoutePreloadingStrategy } from './preloader';


const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    canLoad: [AuthenicationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: RoutePreloadingStrategy,
    scrollPositionRestoration: "enabled",
    paramsInheritanceStrategy: "always",
    relativeLinkResolution: "corrected"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
