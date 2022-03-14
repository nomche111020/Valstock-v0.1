import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Album, Image, User } from '../../models';
import { AlbumService } from '../../services/album.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public tabId: string = "newAlbum";
  public albums: Album[] = [];
  public album: Album | undefined;
  public formData: FormGroup = new FormGroup({
    albumName: new FormControl()
  });;
  public image: Image | undefined ;
  public couner: number = 1;
  public selectedAlbumId: string | undefined;
  public selectedImage: Image | undefined;
  public selectedAlbumIds: string[] = [];
  public albumTitle!: string;
  public users: User[] = [];

  constructor(private albumService: AlbumService, private notificationService: NotificationService ) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      albumName: new FormControl()
    });
  }

  @ViewChild('myModal', { static: false }) modal?: ElementRef;

  open(image: Image) {
    this.modal!.nativeElement.style.display = 'block';
    this.selectedImage = image;
    this.tabId = "newAlbum";
  }

  close() {
    this.modal!.nativeElement.style.display = 'none';
    this.albumTitle = '';
  }

  save(value: any) {
    const date = new Date();
    const album = new Album(this.idGenerator(), value.albumName, [this.selectedImage!], date)
    this.albumService.add(album);
    this.notificationService.showSuccess('This is a success message','');
    this.close();
  }

  tabChange(id: any) {
    this.tabId = id;
    if (this.tabId === 'existingAlbum')
      this.getAlbums();
  }

  onChange(e: any, id: string) : void {
    if (e.target.checked) {
      this.selectedAlbumIds.push(id);
    } else {
      this.selectedAlbumIds.forEach((element, index)=> {
        if(element === id) this.selectedAlbumIds.splice(index, 1);
      });
    }
  }

  insertImageToAlbum() {
    this.albumService.insertImage(this.selectedAlbumIds, this.selectedImage!);
    this.close();
  }

  getAlbums() {
    this.albums = this.albumService.getAlbums();
    this.selectedAlbumId = this.albums[0].id;
  }

  idGenerator() {
    return Math.random().toString(36).substr(2, 9);
  }
}
