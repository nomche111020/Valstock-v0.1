import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public id!: string;
  public album!: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.album = this.albumService.getAlbumById(this.id);
  }
}
