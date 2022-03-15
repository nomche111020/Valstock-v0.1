import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Image } from '../../models';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public throttle = 0;
  public distance = 1;
  public images: Image[] = [];
  public pageSize: number = 12;
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

  onScroll(): void {
    this.imageService.getImages(++this.page, this.pageSize).subscribe(data => {
      this.images.push(...data);
      this.imageService.generateThumbnail(this.images);
    });
  }

}
