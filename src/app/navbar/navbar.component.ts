import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {

  }

  openList(): void {
    this.albums = this.albumService.getAlbums();
    this.list = !this.list;
  }

  closeList(id: string): void {
    this.list = false;
    this.router.navigate(['gallery/album/',id])
      .then(() => {
        window.location.reload();
      });
  }

}
