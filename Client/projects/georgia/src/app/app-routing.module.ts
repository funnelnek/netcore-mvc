import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeorgiaHomeComponent } from './gallery-home.component';
import { GalleryResolver } from './services/resolvers/gallery/gallery.resolver';
import { SocialMediaResolver } from './services/resolvers/social/social-media.resolver';



const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: GeorgiaHomeComponent,
    resolve: {
      gallery: GalleryResolver,
      socialMedia: SocialMediaResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GeorgiaAppRoutingModule { }
