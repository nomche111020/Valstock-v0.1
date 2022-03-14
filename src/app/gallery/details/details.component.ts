import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { saveAs } from 'file-saver';
import { Image } from '../../models';
import { ModalComponent } from '../modal/modal.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public imageId!: string;
  public image: Image | undefined;
  public isOpen: boolean = false;

  constructor(private route: ActivatedRoute, private imageService: ImageService, private router: Router, private notificationService: NotificationService) { }

  @ViewChild('modal', { static: false }) modal!: ModalComponent

  ngOnInit(): void {
    this.imageId = this.route.snapshot.params['id'];

    if (this.imageId) {
      this.imageService.getImageById(this.imageId).subscribe(data => {
        if (data) {
          this.image = data;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(["gallery"]);
  }

  openModal(image: Image): void {
    this.modal.open(image);
  }

  downloadList(): void {
    this.isOpen = !this.isOpen;
  }

  download(width: number, height: number): void {
    const fileName = Date.now() + `-${width}-${height}-image.png`;
    const imageUrl = 'https://picsum.photos/id/';

    fetch(imageUrl + `${this.imageId}/${width}/${height}`).then((res) => {
      return res.blob();
    }).then((blob) => {
      saveAs(blob, fileName);
      this.notificationService.showSuccess("This is a success message!", '');
    })
  }
}
