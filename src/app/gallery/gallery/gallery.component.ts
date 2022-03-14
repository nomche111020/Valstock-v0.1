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
  public pageSize: number = 9;
  public page: number = 1;

  constructor(private imageService: ImageService) { }

  @ViewChild('modal', { static: false }) modal!: ModalComponent

  ngOnInit(): void {
    this.imageService.getImages(this.page, this.pageSize).subscribe(data => {
      if (data) {
        this.images = data;
        this.imageService.generateThumbnail(this.images);
      }
    });
  }

  openModal(image: Image): void {
    this.modal.open(image);
  }

  loadMore(): void {
  }

}
