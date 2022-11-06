import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { AppShellComponent } from "./app-shell.component";



const routes: Route[] = [
    {
        path: "",
        component: AppShellComponent,
        children: []
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AppShellRoutingModule {

}