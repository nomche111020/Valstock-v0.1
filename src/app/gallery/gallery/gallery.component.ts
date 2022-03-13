import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Image } from '../../models';
import { AlbumService } from '../../services/album.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: Image[] = [];
  public image: Image[] = [];
  public albums: string[] = [];

  constructor(private imageService: ImageService, private albumService: AlbumService) { }

  @ViewChild('modal', {static: false}) modal!: ModalComponent

  ngOnInit(): void {
    this.imageService.getImages(1,30).subscribe(data => {
      if(data){
        this.images = data;
      }
    })
  }

  imageDetails(image: Image): void {
    console.log("image details", image);
  }

  openModal(image: Image) {
    this.modal.open(image);
  }

}
