import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public albums: Album[] = [];
  public list: boolean = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {

  }

  openList(): void {
    this.albums = this.albumService.getAlbums();
    this.list = !this.list;
  }

  closeList(): void {
    this.list = false;
  }

}
