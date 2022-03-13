import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Album, Image } from '../../models';
import { AlbumService } from '../../services/album.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public tabId: any = "newAlbum";
  public albums: Album[] = [];
  public album: Album | undefined;
  public formData: FormGroup = new FormGroup({
    albumName: new FormControl()
  });;
  public image: Image | undefined ;
  public couner: number = 1;
  public selectedAlbumId: string | undefined;
  public selectedImage: Image | undefined;

  constructor(private albumService: AlbumService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      albumName: new FormControl()
    });

    // this.albumService.getAlbumById(1);
  }

  @ViewChild('myModal', { static: false }) modal?: ElementRef;

  open(image: Image) {
    this.modal!.nativeElement.style.display = 'block';
    this.selectedImage = image;
  }

  close() {
    this.modal!.nativeElement.style.display = 'none';
  }

  save(value: any) {
    const album = new Album(this.idGenerator(), value.albumName, [this.selectedImage!])
    this.albumService.add(album);
    this.close();
  }

  tabChange(id: any) {
    this.tabId = id;
    if (this.tabId === 'existingAlbum')
      this.getAlbums();
  }

  insertImageToAlbum() {
    this.albumService.insertImage(this.selectedAlbumId!, this.selectedImage!);
    this.close();
  }

  getAlbums() {
    this.albums = this.albumService.getAlbums();
    this.selectedAlbumId = this.albums[0].id;
  }

  selectAlbum(id: string){
    this.selectedAlbumId = id;
  }

  idGenerator() {
    return Math.random().toString(36).substr(2, 9);
  }
}
