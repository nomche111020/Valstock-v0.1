import { Injectable } from '@angular/core';
import { Album, Image, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  public add(data: Album): void {
    const albums = this.getAlbumsFromLocalStorage()
    albums.push(data);
    this.saveAlbumsToLocalStorage(albums);
  }

  public getAlbums(): Album[] {
    return this.getAlbumsFromLocalStorage();
  }

  public getAlbumById(id: string): Album {
    const albums = this.getAlbumsFromLocalStorage()
    const album = albums.find(x => x.id === id);
    return album ? album : albums[0];
  }


  public insertImage(id: string[], image: Image): void {
    const albums = this.getAlbumsFromLocalStorage()
    const albumList = albums.filter(x => id.some(item => item === x.id));

    albumList.map(x => x.images.push(image));
    this.saveAlbumsToLocalStorage(albums);
  }

  private getAlbumsFromLocalStorage(): Album[] {
    const albumsJson = localStorage.getItem('albums');
    let albums: Album[] = []

    if (albumsJson) {
      albums = JSON.parse(albumsJson);
    }

    return albums;
  }

  private saveAlbumsToLocalStorage(albums: Album[]): void {
    localStorage.setItem('albums', JSON.stringify(albums));
  }
}
