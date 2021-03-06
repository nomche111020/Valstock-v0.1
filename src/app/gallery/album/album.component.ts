import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models';
import { AlbumService } from 'src/app/services/album.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public id!: string;
  public album!: Album;
  public removeIds: string[] = [];

  constructor(private route: ActivatedRoute, private imageService: ImageService, private albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.album = this.albumService.getAlbumById(this.id);
    this.imageService.generateThumbnail(this.album.images);
  }

  removeImage(id: string): void {
    this.removeIds.push(id);
  }

  goBack(): void {
    this.router.navigate(["gallery"]);
  }
}
