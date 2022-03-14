import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Image } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _baseUrl: string = 'https://picsum.photos'

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  public getImages(page?: number, limit?: number): Observable<Image[]>{
    return this.http.get<Image[]>(`${this._baseUrl}/v2/list?page=${page}&limit=${limit}`).pipe(
      tap(data => data),
      catchError(this.handleError)
      );
  }

  public getImageById(id: string): Observable<Image>{
    return this.http.get<Image>(`${this._baseUrl}/id/${id}/info`).pipe(
      tap(data =>  data + `${this._baseUrl}/id/${id}/info`),
      catchError(this.handleError)
    );
  }

  public generateThumbnail(images: Image[]){
    const imageUrl = 'https://picsum.photos/id/'
    images.map(x => {
      x.thumbnail_url =imageUrl + `${x.id}/${Math.floor(x.width/10)}/${Math.floor(x.height/10)}`
    });
  }
}
