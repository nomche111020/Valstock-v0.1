import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { LayoutComponent } from './layout/layout.component';
import { AlbumComponent } from './album/album.component';
import { ToastrModule } from 'ngx-toastr';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    InfiniteScrollModule
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
