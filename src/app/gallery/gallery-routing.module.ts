import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { AlbumComponent } from './album/album.component';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent, 
    canActivate: [AuthGuard],
    // pathMatch: 'full',
    children: [
      { path: '', component: GalleryComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'album/:id', component:  AlbumComponent}      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
