import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { LayoutComponent } from './layout/layout.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    GalleryComponent,
    ModalComponent,
    DetailsComponent,
    LayoutComponent,
    AlbumComponent
  ]  
})
export class GalleryModule { }
